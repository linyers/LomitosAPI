from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError

from .utils import send_email

User = get_user_model()


class SignupSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'email', 'password',]
        extra_kwargs = {
            'password': {'write_only': True},
            'id': {'read_only': True}
        }
    

    def create(self, validated_data):
        user = User.objects.create_user(email=validated_data['email'], password=validated_data['password'])
        try:
            validate_password(password=validated_data['password'], user=user)
        except ValidationError as err:
            user.delete()
            raise serializers.ValidationError({'password': err.messages})
        
        send_email_confirm = send_email(self.context['request'], user,user.email)
        if send_email_confirm:
            raise serializers.ValidationError({'Email': f'Problem sending email to {user.email}, check if you typed correctly.'})
        return user

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        if user.is_email_confirmed:
            token = super().get_token(user)
            token['email'] = user.email
            return token
        raise serializers.ValidationError({'Email Confirm': 'Please confirm your email address. Note: Check spam!'}) 