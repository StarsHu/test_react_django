from django.conf.urls import url
from .views import *

urlpatterns = [
    url(r'^page1/', page1, name='test'),
]