from rest_framework import serializers
from .models import Stocktbl, Newstbl

class StocktblSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stocktbl
        fields = ['symbol', 'name', 'industry', 'industrycode', 'id']