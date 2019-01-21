from django.urls import path
from checkoutapp import views


app_name = 'checkoutapp'

urlpatterns = [
     path('',views.checkout,name='checkout'),
]
