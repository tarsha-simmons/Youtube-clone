from rest_framework import serializers
from .models import Comment


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment 
        fields = ['id', 'video_id', 'text', 'likes', 'disllikes', 'user_id']
        depth = 1

