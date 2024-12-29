from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect

# Create your views here.
def index(request):
    return render(request, "index.html")

def login(request):
    return render(request, "login.html")

def register(request):
    return render(request, "register.html")

def info(request):
    return render(request, "infopage.html")

def workspace(request, PID):
    return render(request, "workspace.html")