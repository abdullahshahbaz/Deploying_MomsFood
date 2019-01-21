from django.shortcuts import render
from django.urls import reverse
from masterapp.models import Slider,menu,SubCategory,Item
from .models import ProductDetail,ProductPicture
from .forms import ReviewForm
# Create your views here.

menu_dict = {'menu': menu.objects.all(),}
SubCategory_dict = {'subcategory' : SubCategory.objects.all(),}
Item_dict = {'item' : Item.objects.all(),}

def detail(request,name):

        if request.method == 'POST':
        # create a form instance and populate it with data from the request:
            form = ReviewForm(request.POST)
        # check whether it's valid:
            if form.is_valid():
            # process the data in form.cleaned_data as required
            # ...
            # redirect to a new URL:
                return HttpResponseRedirect('/thanks/')
                # if a GET (or any other method) we'll create a blank form
        else:
            form = ReviewForm()

        detail_dict = {'details' : ProductDetail.objects.filter(name=name),}
        pic_dict = {'pictures': ProductPicture.objects.filter(product_name=name)}
        item_detail_dict = {'item_details' : Item.objects.filter(Items=name)}
        all_dict ={'menu' : menu_dict,
                    'subcategory' : SubCategory_dict,
                    'item' : Item_dict,
                    'pictures' : pic_dict,
                    'details' : detail_dict,
                    'item_details' : item_detail_dict,}

        all_dict['product'] = name
        all_dict['form'] = form
        print(all_dict)
        return render(request,'product_details/product_details.html',all_dict)
