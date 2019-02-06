from django.shortcuts import render
from masterapp.models import menu,SubCategory,Item
from .forms import SignupForm
# Create your views here.
def signup(request):
    menu_dict = {'menu': menu.objects.all(),}
    SubCategory_dict = {'subcategory' : SubCategory.objects.all(),}
    Item_dict = {'item' : Item.objects.all(),}
    form = SignupForm()

    all_dict ={'menu' : menu_dict,
                'subcategory' : SubCategory_dict,
                'item' : Item_dict,
                'form' : form,
                }
    return render(request,'signup/signup.html',all_dict)
