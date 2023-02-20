from django.urls import path,include
from .views import stock_detail, stock_news

urlpatterns = [
    path('stock/<str:corp_name>', stock_detail),
    path('news/<str:corp_name>', stock_news)
]