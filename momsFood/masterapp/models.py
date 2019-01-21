from django.db import models

# Create your models here.
class Slider(models.Model):
    image = models.ImageField(upload_to='Slider_Pictures')

class menu(models.Model):
    Category = models.CharField(max_length=50,unique=True,primary_key=True)

    def __str__(self):
        return self.Category


class SubCategory(models.Model):
    Category = models.ForeignKey('menu',on_delete=models.CASCADE)
    SubMenu = models.CharField(max_length=50,unique=True,primary_key=True)

    def __str__(self):
        return self.SubMenu

class Item(models.Model):
    SubMenu = models.ForeignKey('SubCategory',on_delete=models.CASCADE)
    Items = models.CharField(max_length=50,unique=True,primary_key=True)
    image = models.ImageField(upload_to='Items_Pictures',default='no picture')
    description = models.TextField(blank=True, null=True,default="No description")
    special_price = models.IntegerField(null=False,default=0)
    old_price = models.IntegerField(null=True,default=0)

    def __str__(self):
        return self.Items
