from django.shortcuts import render
from django.urls import reverse

# Create your views here.
from masterapp.models import Slider,menu,SubCategory,Item
# Create your views here.

pic_dict = {'pictures': Slider.objects.all(),}

menu_dict = {'menu': menu.objects.all(),}

SubCategory_dict = {'subcategory' : SubCategory.objects.all(),}
Item_dict = {'item' : Item.objects.all(),}

all_dict ={'menu' : menu_dict,
            'subcategory' : SubCategory_dict,
            'item' : Item_dict,
            'pictures' : pic_dict, }

def product(request,name):
    all_dict['product'] = name
    return render(request,'list/product.html',all_dict)
