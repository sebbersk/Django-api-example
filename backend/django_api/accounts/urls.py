from django.urls import path
from .views import SignUpView, UserView

urlpatterns = [
    path('signup', SignUpView.as_view()),
    path("auth", UserView.as_view())
]
