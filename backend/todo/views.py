from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializers import ToDoSerializer
from .models import ToDo

class ToDoViewSets(viewsets.ModelViewSet):
    serializer_class = ToDoSerializer
    queryset = ToDo.objects.all()
    