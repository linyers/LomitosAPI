from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny

from .models import Lomito, Rating, DayTime, NightTime
from .serializers import LomitoSerializer
from .permissions import IsOwnerOrAdmin
from .pagination import CustomPagination


class CustomModelViewSet(viewsets.ModelViewSet):
    def get_permissions(self):
        if self.action == 'list' or self.action == 'retrieve':
            permission_classes = [AllowAny,]
        else:
            permission_classes = [IsAuthenticated, IsOwnerOrAdmin,]
        return [permission() for permission in permission_classes]


class LomitosViewSet(CustomModelViewSet):
    serializer_class = LomitoSerializer
    queryset = Lomito.objects.all()
    pagination_class = CustomPagination

    # TODO def retrieve(self, request, pk=None):
    #     queryset = Lomito.objects.all()
    #     lomito = get_object_or_404(queryset, pk=pk)
    #     serializer = LomitoSerializer(lomito)
    #     return Response(serializer.data)
    
    # TODO def update(self, request, *args, **kwargs):
    #     return super().update(request, *args, **kwargs)

    def get_queryset(self):
        params = self.request.query_params

        if not params:
            return super().get_queryset()
        
        params_copy = dict(**params)

        queryset = set()

        data = []

        rating_data = {k: params_copy.pop(k)[0] for k in params.keys() if k == 'rate' or k == 'reviews'}
        rating = Rating.objects.filter(**rating_data)
        data.append(list(rating.values_list('id', flat=True)))

        day_time_data = {k[2::]: params_copy.pop(k)[0] for k in params.keys() if k[0] == 'd'}
        day_time = DayTime.objects.filter(**day_time_data)
        data.append(list(day_time.values_list('id', flat=True)))

        night_time_data = {k[2::]: params_copy.pop(k)[0] for k in params.keys() if k[0] == 'n' and k != 'name'}
        night_time = NightTime.objects.filter(**night_time_data)
        data.append(list(night_time.values_list('id', flat=True)))
        
        rating, day_time, night_time = data
        data = (r for r in rating if r in day_time and r in night_time)

        params_copy = {k: v[0] for k, v in params_copy.items() if k in ['name', 'phone', 'maps', 'logo']}

        for d in data:
            queryset = queryset.union(Lomito.objects.filter(rating=d, day_time=d, night_time=d, **params_copy))

        return list(queryset)