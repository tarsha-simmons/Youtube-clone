from django.urls import path, include
from comments import views

urlpatterns = [
    path('', views.user_comment),
    path('all/', views.get_all_comments),
    path('<int:pk>/', views.get_comment_by_id)
]