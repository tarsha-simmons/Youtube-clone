from django.urls import path, include
from replies import views

urlpatterns = [
    path('all/', views.get_all_replies),
    path('<int:pk>/', views.get_replies)
]