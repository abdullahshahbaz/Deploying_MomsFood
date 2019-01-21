from django.shortcuts import render
from .models import Slider,menu,SubCategory,Item
# Create your views here.

pic_dict = {'pictures': Slider.objects.all(),}
menu_dict = {'menu': menu.objects.all(),}
SubCategory_dict = {'subcategory' : SubCategory.objects.all(),}
Item_dict = {'item' : Item.objects.all(),}

all_dict ={'menu' : menu_dict,
            'subcategory' : SubCategory_dict,
            'item' : Item_dict,
            'pictures' : pic_dict }


# print(menu_dict)
# print(SubCategory_dict)
# print(Item_dict)
# print(pic_dict)

def index(request):
    return render(request,'masterapp/index.html',all_dict)
