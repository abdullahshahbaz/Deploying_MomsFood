from django.urls import path
from list import views


app_name = 'list'

urlpatterns = [
    path('product/<str:name>',views.product,name='product'),
]
