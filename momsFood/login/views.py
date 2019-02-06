from django.shortcuts import render
from masterapp.models import menu,SubCategory,Item
from .forms import LoginForm
# Create your views here.

def login(request):

    menu_dict = {'menu': menu.objects.all(),}
    SubCategory_dict = {'subcategory' : SubCategory.objects.all(),}
    Item_dict = {'item' : Item.objects.all(),}
    form = LoginForm()
    all_dict ={'menu' : menu_dict,
                'subcategory' : SubCategory_dict,
                'item' : Item_dict,
                'form' : form
                }
    return render(request,'login/login.html',all_dict)
