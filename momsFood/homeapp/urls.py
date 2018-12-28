from django.urls import path
from homeapp import views


app_name = 'homeapp'

urlpatterns = [
    path('',views.index,name='index'),
]
