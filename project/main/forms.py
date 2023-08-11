from django import forms
from django.forms import EmailField
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import CreateCard

class RegiterForm(UserCreationForm):
    email = EmailField(required=True)

    class Meta:
        model = User
        fields = ["username", "email", "password1", "password2"]

class CreateCardForm(forms.ModelForm):
    class Meta:
        model = CreateCard
        fields = ["title","price",'img_url',"description"]