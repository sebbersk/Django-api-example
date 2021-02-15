from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.generics import ListAPIView
from .serializers import UserSerializer

User = get_user_model()


class UserView(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    def get(self, request, format=None):

        user = User.objects.get(email=request.user)
        data = UserSerializer(user).data
        return Response(data)


class SignUpView(APIView):
    permission_classes = [permissions.AllowAny, ]

    def post(self, request, format=None):
        data = request.data
        name = data["name"]
        email = data["email"]
        password = data["password"]
        password2 = data["password2"]

        if password == password2:
            if User.objects.filter(email=email).exists():
                return Response({'error': 'Email already exists'})
            else:
                if len(password) < 6:
                    return Response({'error': 'Password must be at least 6 characters long'})
                else:
                    user = User.objects.create_user(
                        email=email, password=password, name=name)
                    user.save()
                    return Response({'success': 'User Created Successfully'})

        else:
            return Response({'error': 'Passwords do not match'})
