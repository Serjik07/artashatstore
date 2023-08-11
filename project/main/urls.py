from django.urls import path
from . import views

urlpatterns = [
    path("",views.home),
    path("home",views.home, name="home"),
    path("shop",views.shop, name="shop"),
    path("login",views.sign_in),
    path("logout",views.logoout, name="logout"),
    path("sign_up", views.sign_up, name="sign_up"),
    path("post",views.createPost, name="post"),

]
