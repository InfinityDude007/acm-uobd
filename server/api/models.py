# Create your models here.
from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    thumbnail = models.ImageField(upload_to='events', blank=True, null=True)
    date = models.DateTimeField()

    def __str__(self):
        return self.title
    
class Registration(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='registrations')
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15, blank=True, null=True)
    comments = models.TextField(blank=True, null=True)

    def __str__(self):
        return f'{self.name} - {self.event.title}'