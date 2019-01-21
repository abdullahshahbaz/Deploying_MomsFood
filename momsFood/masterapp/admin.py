from django.contrib import admin

# Register your models here.
from masterapp.models import Slider,menu,SubCategory,Item
admin.site.register(Slider)
admin.site.register(menu)
admin.site.register(SubCategory)
admin.site.register(Item)
