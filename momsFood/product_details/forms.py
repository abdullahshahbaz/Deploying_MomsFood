from django import forms
from django.forms import widgets

class ReviewForm(forms.Form):
    username = forms.CharField(label='Your name', widget=forms.TextInput(attrs={'class' : 'input-text'}))
    summary = forms.CharField(label='Summary',widget=forms.TextInput(attrs={'class' : 'input-text'}))
    review = forms.CharField(label='Review',widget=forms.Textarea)
    CHOICES = (('1', 'First',), ('2', 'Second',),('3','Third'),('4','Four'),
                ('5','Five'))
    value = forms.ChoiceField(choices=CHOICES)

    quality = forms.ChoiceField(choices=CHOICES)

    price = forms.ChoiceField(choices=CHOICES)
