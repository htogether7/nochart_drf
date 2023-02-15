from django.urls import path,include
from .views import stock_detail

urlpatterns = [
    path('stock/<str:corp_name>', stock_detail)
]