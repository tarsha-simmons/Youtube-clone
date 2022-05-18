from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .serializers import ReplySerializer
from replies.models import Reply
from comments.models import Comment

# Create your views here.
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def get_replies(request, pk,):
    print('User', f'{request.data} {request.user.email} {request.user.username}')
    reply = get_object_or_404(Reply, pk=pk, )
    if request.method == 'POST':
        serializer = ReplySerializer(reply, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(reply=request.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'GET':
        # reply_comment_param = request.query.params.get('comment')
        # replies = Reply.objects.all()
        # custom_response_dictionary = {}
        serializer = ReplySerializer(reply)
        return Response(serializer.data, status=status.HTTP_200_OK)




@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_replies(request):
    if request.method == 'GET':
        replies = Reply.objects.all()
        serializer = ReplySerializer(replies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

