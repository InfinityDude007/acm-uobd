from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def hello_world(request):
    return Response({"message": "Hello from Django backend!"})


from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404, redirect
from .models import Event
from .forms import RegistrationForm
from django.utils import timezone
from .serializers import EventSerializer

def health_check(request):
    return JsonResponse({"status": "ok"})

@api_view(['GET'])
def events_view(request):
    current_time = timezone.now()
    upcoming_events = Event.objects.filter(date__gte=current_time)
    past_events = Event.objects.filter(date__lt=current_time)

    # Pass context={'request': request} to build full URLs
    upcoming_serializer = EventSerializer(upcoming_events, many=True, context={'request': request})
    past_serializer = EventSerializer(past_events, many=True, context={'request': request})

    return Response({
        "upcoming_events": upcoming_serializer.data,
        "past_events": past_serializer.data
    })


@api_view(['POST'])
def register_for_event(request, event_id):
    event = get_object_or_404(Event, pk=event_id)
    form = RegistrationForm(request.data)

    if form.is_valid():
        registration = form.save(commit=False)
        registration.event = event
        registration.save()
        return Response({'message': 'Registration successful!'}, status=200)
    
    return Response({'message': 'Form is invalid', 'errors': form.errors}, status=400)