from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView
from rest_framework.decorators import api_view

from django.contrib.auth import get_user_model
from django.utils.encoding import force_str
from django.utils.http import urlsafe_base64_decode
from django.http import JsonResponse
from django.contrib.sites.shortcuts import get_current_site

from .serializers import MyTokenObtainPairSerializer, SignupSerializer
from .utils import account_activation_token

from rest_framework_simplejwt.views import TokenObtainPairView


@api_view(['GET'])
def get_routes(request):
    site = 'https://' if request.is_secure() else 'http://' + get_current_site(request).domain

    routes = {
        'Signup': f'{site}/api/auth/signup/',
        'Login': f'{site}/api/auth/login/',
        'User info': f'{site}/api/auth/user/',
        'Refresh token': f'{site}/api/auth/token/refresh/'}

    return Response(routes)

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class SignupAPIView(CreateAPIView):
    serializer_class = SignupSerializer
    permission_classes = [AllowAny,]


class UserInformationAPIVIew(APIView):

    permission_classes = [IsAuthenticated,]

    def get(self, request):
        user = request.user
        email = user.email
        created_at = user.created_at
        payload = {'id': user.pk, 'email': email, 'created_at': created_at}
        return Response(data=payload, status=200)


def activate(request, uidb64, token):
    User = get_user_model()

    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except:
        user = None

    if user and account_activation_token.check_token(user, token):
        user.is_email_confirmed = True
        user.save()

        return JsonResponse({"success": "Thank you for your email confirmation. Now you can login your account."})
    else:
        return JsonResponse({"error": "Activation link is invalid!"})