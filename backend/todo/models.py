from django.db import models
from django.utils import timezone



class ToDo(models.Model):
    title = models.CharField(max_length=120)
    status = models.CharField( max_length=50,choices=[('DONE','DONE'),('INPROGRESS','INPROGRESS')])
    created_at = models.DateTimeField(default=timezone.now)
    
    def __str__(self):
        return self.title
    
    
