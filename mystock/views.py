from django.shortcuts import render
from .models import Stocktbl, Newstbl;
from rest_framework import viewsets, permissions, generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from .serializers import StocktblSerializer
# Create your views here.

@api_view(['GET'])
def stock_view(request):
    stocks = Stocktbl.objects.all()
    serializer = StocktblSerializer(stocks, many=True)
    return Response(serializer.data, status = status.HTTP_200_OK)
