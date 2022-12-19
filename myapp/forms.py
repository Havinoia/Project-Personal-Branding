from django import forms  
from .models import *

class Dbuser(forms.ModelForm):  
    class Meta:  
        model = Dbuser
        fields = ["name", "phone", "email", "pesan"]

class Member(forms.ModelForm):  
    class Meta:  
        model = Member
        fields = ["name", "email", "password"]
 
    