from django.urls import path
from . import views

app_name = 'quickView'

urlpatterns = [
    path('<str:name>', views.quickView, name="quickview"),
]
