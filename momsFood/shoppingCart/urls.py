from django.urls import path
from shoppingCart import views


app_name = 'shoppingCart'

urlpatterns = [
     path('no/',views.usercart,name='usercart'),
]
