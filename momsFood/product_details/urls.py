from django.urls import path
from product_details import views


app_name = 'product_details'

urlpatterns = [
    path('detail/<str:name>',views.detail,name='detail'),
]
