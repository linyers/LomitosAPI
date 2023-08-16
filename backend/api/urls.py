from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LomitosViewSet

router = DefaultRouter()
router.register(r'lomitos', LomitosViewSet, basename="lomito")

app_name = 'api'

urlpatterns = [
    path("", include(router.urls))
]
