from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .serializers import ReplySerializer
from replies.models import Reply
# Create your views here.
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_replies(request,pk):
    reply_comment_param = request.query.params.get('comment')
    replies = Reply.objects.all()
    custom_response_dictionary = {}
    if reply_comment_param == int(pk):

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_replies(request):
    replies = Reply.objects.all()
    serializer = ReplySerializer(replies, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_replies(request):
    print('User', f'{request.data} {request.user.email} {request.user.username}')
    if request.method == 'POST':
        serializer = ReplySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

