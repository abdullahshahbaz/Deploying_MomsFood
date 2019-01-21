from django.db import models
# Create your models here.
# class Review(models.Model):
#     value = models.IntegerField(null=False)
#     quantity = models.IntegerField(null=False)
#     price = models.IntegerField(null=False)
#     user = models.CharField(max_length=50,null=False)
#     summary = models.TextField(null=True)
#     review = models.TextField(null=True)

class ProductDetail(models.Model):
    name = models.ForeignKey('masterapp.Item',on_delete=models.CASCADE)
    quantity = models.IntegerField(null=False)
    in_stock = models.BooleanField(default=True)
    quick_review = models.TextField(null=False)
    product_description = models.TextField(null=False)
    new_item = models.BooleanField(default=False)

    def __str__(self):
        return str(self.name)

class ProductPicture(models.Model):
    product_name = models.ForeignKey('masterapp.Item',on_delete=models.CASCADE)
    product_image = models.ImageField(upload_to='Product_Pictures',default='no picture')
    product_image_type = models.CharField(max_length=10,default='images')

    def __str__(self):
        return str(self.product_name)
