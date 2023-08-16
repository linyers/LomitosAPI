from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny

from .models import Lomito
from .serializers import LomitoSerializer
from .permissions import IsOwnerOrAdmin


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