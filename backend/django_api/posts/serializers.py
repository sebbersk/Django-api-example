from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.Serializer):
    title = serializers.CharField()
    body = serializers.CharField()
    created = serializers.DateTimeField()
    author = serializers.StringRelatedField(read_only=True)
    id = serializers.IntegerField()
