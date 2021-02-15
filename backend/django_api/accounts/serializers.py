from rest_framework import serializers
from .models import UserAccountManager


class UserSerializer(serializers.Serializer):
    email = serializers.EmailField()
    name = serializers.CharField(max_length=255)
    id = serializers.IntegerField()
