from django.db import models

# Create your models here.
class Newstbl(models.Model):
    article_id = models.IntegerField(primary_key=True)
    corp = models.CharField(max_length=7)
    title = models.CharField(max_length=120)
    author = models.CharField(max_length=50)
    link = models.CharField(max_length=512)

    class Meta:
        managed = False
        db_table = 'newstbl'


class Stocktbl(models.Model):
    symbol = models.CharField(max_length=7, blank=True, null=True)
    name = models.TextField(db_column='Name', blank=True, null=True)  # Field name made lowercase.
    industry = models.TextField(db_column='Industry', blank=True, null=True)  # Field name made lowercase.
    industrycode = models.TextField(db_column='IndustryCode', blank=True, null=True)  # Field name made lowercase.
    id = models.BigIntegerField(primary_key=True)

    class Meta:
        managed = False
        db_table = 'stocktbl'