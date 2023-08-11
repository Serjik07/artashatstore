from django.shortcuts import render, redirect
from .forms import RegiterForm
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from .forms import CreateCardForm
from .models import CreateCard
# Create your views here.
@login_required(login_url="/login")
def home(request):
    return render(request, "main/index.html")

@login_required(login_url="/login")
def shop(request):
    cards = CreateCard.objects.all()

    if request.method == "POST":
        post_id = request.POST.get("card_id")
        card = CreateCard.objects.filter(id=post_id).first()

        if card and card.author == request.user:
            card.delete()

    return render(request, "main/shop.html",{"cards":cards})

@login_required(login_url="/login")
def createPost(request):
    if request.method == "POST":
        form = CreateCardForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.save()
            return redirect("/home")
    else:
        form = CreateCardForm()
    return render(request, "main/post.html",{"form":form})

def logoout(request):
    logout(request)
    return redirect('/login')

def sign_in(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    
    user = authenticate(username=username,password=password)

    if user is not None:
        login(request, user)
        return redirect("/home")
    return render(request, "main/login.html")

def sign_up(request):
    
    if request.method == "POST":
        form = RegiterForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request,user)
            return redirect("/")
    else:
        form = RegiterForm()

    
    return render(request, "main/sign_up.html",{"form":form})