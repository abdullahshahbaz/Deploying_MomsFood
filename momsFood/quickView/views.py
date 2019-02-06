from django.shortcuts import render
from masterapp.models import menu,SubCategory,Item
from django.urls import reverse
from masterapp.models import Slider,menu,SubCategory,Item
from product_details.models import ProductDetail,ProductPicture
# Create your views here.

def quickView(request,name):
    detail_dict = {'details' : ProductDetail.objects.filter(name=name),}
    pic_dict = {'pictures': ProductPicture.objects.filter(product_name=name)}
    item_detail_dict = {'item_details' : Item.objects.filter(Items=name)}
    subcat = Item.objects.filter(Items=name).values('SubMenu_id')
    cat = SubCategory.objects.filter(SubMenu=subcat[0]['SubMenu_id']).values()
    cat = cat[0]['Category_id']
    all_dict ={ 'pictures' : pic_dict,
                'details' : detail_dict,
                'item_details' : item_detail_dict,}
    all_dict['product'] = name
    all_dict['category'] = cat
    # all_dict['category'] = category
    return render(request,'quickView/quickview.html',all_dict)
