from django import forms
from django.forms import widgets

class SignupForm(forms.Form):
    email = forms.EmailField(widget=forms.EmailInput(attrs={'class' : 'form-input'}))
    password = forms.CharField(widget=forms.PasswordInput(attrs={'class':'form-input'}))
    firstname = forms.CharField(widget=forms.TextInput(attrs={'class':'form-input'}))
    lastname = forms.CharField(widget=forms.TextInput(attrs={'class':'form-input'}))
    companyname = forms.CharField(widget=forms.TextInput(attrs={'class':'form-input'}))
    phonenumber = forms.CharField(widget=forms.TextInput(attrs={'class':'form-input'}))
    address1 = forms.CharField(widget=forms.TextInput(attrs={'class':'form-input'}))
    address2 = forms.CharField(widget=forms.TextInput(attrs={'class':'form-input'}))
    city = forms.CharField(widget=forms.TextInput(attrs={'class':'form-input'}))
    state_province = forms.CharField(widget=forms.TextInput(attrs={'class':'form-input'}))
    zipcode = forms.CharField(widget=forms.TextInput(attrs={'class':'form-input'}))
