from django.shortcuts import render
from .models import Slider
# Create your views here.

pic_dict = {'pictures': Slider.objects.all(),}
def index(request):
    return render(request,'homeapp/index.html',pic_dict)
