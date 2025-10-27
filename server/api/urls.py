# from django.urls import path
# from .views import hello_world

# urlpatterns = [
#     path('hello/', hello_world),
# ]

from django.urls import path
from django.conf import settings
import os
from django.conf.urls.static import static
from . import views
urlpatterns = [
    path('events/', views.events_view, name='events_view'),
    path('events/<int:event_id>/register/', views.register_for_event, name='register_for_event'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)