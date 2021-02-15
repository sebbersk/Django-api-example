from django.db import models
from accounts.models import UserAccount
# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=255, null=False, blank=False)
    body = models.TextField(null=False)
    created = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
