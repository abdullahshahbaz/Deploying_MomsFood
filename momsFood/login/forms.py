from django import forms
from django.forms import widgets

class LoginForm(forms.Form):
    email = forms.EmailField(widget=forms.EmailInput(attrs={'class' : 'input-text required-entry'}))
    password = forms.CharField(widget=forms.PasswordInput(attrs={'class' : 'input-text required-entry validate-password' }))
