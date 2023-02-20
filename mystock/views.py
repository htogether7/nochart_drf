from django.shortcuts import render
from .models import Stocktbl, Newstbl;
from rest_framework import viewsets, permissions, generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.generics import get_object_or_404
from .serializers import StocktblSerializer, NewstblSerializer
# Create your views here.

@api_view(['GET'])
def stock_detail(request, corp_name):
    stock = get_object_or_404(Stocktbl, symbol=corp_name)
    serializer = StocktblSerializer(stock)
    return Response(serializer.data, status = status.HTTP_200_OK)

@api_view(['GET'])
def stock_news(request, corp_name):
    news = Newstbl.objects.filter(corp=corp_name)
    serializer = NewstblSerializer(news, many=True)
    return Response(serializer.data, status = status.HTTP_200_OK)