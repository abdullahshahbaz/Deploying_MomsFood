# Generated by Django 2.1.4 on 2019-01-09 02:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('masterapp', '0003_auto_20190108_2210'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='discount_price',
            field=models.IntegerField(default=0, null=True),
        ),
    ]
