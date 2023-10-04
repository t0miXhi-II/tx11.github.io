from django.urls import path
from myPortfolioApp import views


urlpatterns = [
    path('', views.index, name='index'),
]