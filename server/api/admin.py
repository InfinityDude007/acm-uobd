from django.contrib import admin

# Register your models here.
from django.contrib import admin
from django.db.models import Count
from .models import Event, Registration
class RegistrationAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "event")  # Display relevant columns
    list_per_page = 15  # Limits number of records per page

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        return qs.order_by('event', 'name', 'email').distinct('event', 'name', 'email')  # Remove duplicates

class EventAdmin(admin.ModelAdmin):
    """
    Custom admin view for events that includes a column for unique registrants count.
    """
    list_display = ("title", "unique_registrants")  # Show event name and unique registrants count
    list_per_page = 15
    def unique_registrants(self, obj):
        """
        Count unique registrants based on the name field for each event.
        """
        return Registration.objects.filter(event=obj).values("name").distinct().count()

    unique_registrants.short_description = "Unique Registrants"  # Label for admin panel
admin.site.register(Event,EventAdmin)
admin.site.register(Registration,RegistrationAdmin)