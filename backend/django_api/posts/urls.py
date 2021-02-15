from django.urls import path
from .views import PostListView, MyPostView, PostView, CreatePostView

urlpatterns = [
    path('', PostListView.as_view()),
    path("my", MyPostView.as_view()),
    path("create", CreatePostView.as_view()),
    path('<pk>', PostView.as_view())
]
