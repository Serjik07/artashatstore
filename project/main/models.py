from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class CreateCard(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    price = models.CharField(max_length=200, default="$1")
    img_url = models.CharField(max_length=1000)
    description = models.TextField(max_length=100)

    
    

    def __str__(self):
        return self.title + '\n' + self.description
    
    class Meta:
        verbose_name = "Post"
        verbose_name_plural = "Posts"