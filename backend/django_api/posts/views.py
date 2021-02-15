from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .serializers import PostSerializer
from .models import Post
from rest_framework import permissions, authentication
from rest_framework.views import APIView
from rest_framework.response import Response
from accounts.models import UserAccount
from accounts.serializers import UserSerializer
from rest_framework.decorators import api_view


class CreatePostView(APIView):
    permission_classes = [permissions.IsAuthenticated, ]

    def post(self, request, format=None):
        data = request.data
        title = data["title"]
        body = data["body"]
        username = request.user
        user = UserAccount.objects.get(email=username)
        post = Post(title=title, body=body, author=user)
        post.save()

        return Response(PostSerializer(post).data)


class PostListView(ListAPIView):
    permission_classes = [permissions.AllowAny, ]
    authentication_classes = [authentication.BasicAuthentication]
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostView(RetrieveAPIView):
    permission_classes = [permissions.AllowAny, ]
    authentication_classes = [authentication.BasicAuthentication]
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class MyPostView(ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = PostSerializer

    def get_queryset(self):
        return Post.objects.filter(author=self.request.user)

# Create your views here.
