
from django.shortcuts import render, redirect
from .models import *
from django.contrib import messages
from django.http import HttpResponse
# from .models import Userdb

def Insertrecord(request):
    if request.method == 'POST':
        if request.POST.get('name') and request.POST.get('phone') and request.POST.get('email') and request.POST.get('pesan'):
            table = Dbuser()
            table.name = request.POST.get('name')
            table.phone = request.POST.get('phone')
            table.email = request.POST.get('email')
            table.pesan = request.POST.get('pesan')
            table.save()
            messages.success(request, 'Saved')  
            return render(request, 'index.html')
    else:
            return render(request, 'index.html')


def home(request):
    if 'user' in request.session:
        current_user = request.session['user']
        param = {'current_user': current_user}
        return render(request, 'index.html', param)
    else:
        return redirect('login')
    return render(request, 'login.html')

def signup(request):
    if request.method == 'POST':
        uname = request.POST.get('uname')
        email = request.POST.get('email')
        pwd = request.POST.get('pwd')
        # print(uname, pwd)
        if Member.objects.filter(name=uname).count()>0:
            return HttpResponse('name already exists.')
        else:
            user = Member(name=uname, password=pwd, email=email)
            user.save()
            return redirect('login')
    else:
        return render(request, 'signup.html')

def login(request):
    if request.method == 'POST':
        uname = request.POST.get('uname')
        email = request.POST.get('email')
        pwd = request.POST.get('pwd')

        check_user = Member.objects.filter(name=uname, password=pwd, email=email)
        if check_user:
            request.session['user'] = uname
            return redirect('home')
        else:
            return HttpResponse('Please enter valid name or Password.')

    return render(request, 'login.html')


def logout(request):
    try:
        del request.session['user']
    except:
        return redirect('login')
    return redirect('login')