from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from django.contrib.sites.shortcuts import get_current_site

from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def get_routes(request):
    site = 'https://' if request.is_secure() else 'http://' + get_current_site(request).domain
    
    routes = {'Lomitos': f'{site}/api/lomitos/','Authentication': f'{site}/api/auth/'}
    
    return Response(routes)

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/", get_routes, name="routes"),
    path('api/', include('api.urls', namespace='api')),
    path('api/auth/', include('users.urls', namespace='users'))
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)