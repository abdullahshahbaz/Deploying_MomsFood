from django.urls import path
from masterapp import views


app_name = 'masterapp'

urlpatterns = [
    path('',views.index,name='index'),
    path('home/',views.index,name='home'),
]
