from django.urls import path
from .views import MyTokenObtainPairView, SignupAPIView, UserInformationAPIVIew, activate, get_routes

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

app_name = 'users'

urlpatterns = [
    path("", get_routes, name="routes"),
    path('signup/', SignupAPIView.as_view(), name='signup'),
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('user/', UserInformationAPIVIew.as_view(), name='user_info'),
    path('activate/<uidb64>/<token>', activate, name='activate'),
]
