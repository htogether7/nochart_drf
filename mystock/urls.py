from django.urls import path,include
from .views import stock_view

urlpatterns = [
    path('', stock_view)
]