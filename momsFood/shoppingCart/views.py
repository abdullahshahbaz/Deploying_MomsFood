from django.shortcuts import render
from masterapp.models import menu,SubCategory,Item
# Create your views here.
menu_dict = {'menu': menu.objects.all(),}

SubCategory_dict = {'subcategory' : SubCategory.objects.all(),}
Item_dict = {'item' : Item.objects.all(),}

all_dict ={'menu' : menu_dict,
            'subcategory' : SubCategory_dict,
            'item' : Item_dict,
            }

def usercart(request):
    return render(request, 'shoppingCart/cart.html', all_dict)
