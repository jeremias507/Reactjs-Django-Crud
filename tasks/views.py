from rest_framework import viewsets
from .serializer import TaskSerializer  # Corregir el nombre del módulo de serializador
from .models import Task

class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()