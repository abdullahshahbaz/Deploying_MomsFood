from django import forms
from django.forms import widgets

class ShippingForm(forms.Form):
    firstname = forms.CharField(label='First Name', widget=forms.TextInput(attrs={'class' : 'input-text required-entry'}))
    lastname = forms.CharField(label='Last Name',widget=forms.TextInput(attrs={'class' : 'input-text required-entry'}))
    address = forms.CharField(label='Address for Delivery',widget=forms.TextInput(attrs={'class' : 'input-text required-entry'}))
    telephone = forms.CharField(label='Telephone',widget=forms.TextInput(attrs={'class': 'input-text required-entry'}))
