from rest_framework import serializers
from .models import Stocktbl, Newstbl

class StocktblSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stocktbl
        fields = ('symbol', 'name', 'industry', 'industrycode', 'id')

class NewstblSerializer(serializers.ModelSerializer):
    class Meta:
        model = Newstbl
        fields = ('article_id', 'corp', 'title', 'author', 'link')