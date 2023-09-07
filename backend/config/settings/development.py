from .base import *

SECRET_KEY = os.environ.get('SECRET_KEY') 

DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'LomitosAPI',
        'USER': 'postgres',
        'PASSWORD': 'ala',
        'HOST': 'localhost',
        'PORT': '',
    }
}

MEDIA_ROOT = Path.joinpath(BASE_DIR, 'media')
STATIC_ROOT = Path.joinpath(BASE_DIR,'static')