from django.shortcuts import render
from masterapp.models import menu,SubCategory,Item
from .forms import ShippingForm
# Create your views here.

menu_dict = {'menu': menu.objects.all(),}

SubCategory_dict = {'subcategory' : SubCategory.objects.all(),}
Item_dict = {'item' : Item.objects.all(),}

all_dict ={'menu' : menu_dict,
            'subcategory' : SubCategory_dict,
            'item' : Item_dict,
            }

def checkout(request):
    form = ShippingForm()
    all_dict['form'] = form
    return render(request, 'checkoutapp/checkout.html', all_dict)
