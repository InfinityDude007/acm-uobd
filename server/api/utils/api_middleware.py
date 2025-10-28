from django.conf import settings
from django.http import JsonResponse

class ProtectAPIMiddleware:
    
    def __init__(self, get_response):
        self.get_response = get_response
        self.api_key = getattr(settings, 'API_KEY', None)

    def __call__(self, request):
        path = request.path

        if (
            path.startswith('/admin') or
            path.startswith('/static') or
            path.startswith('/media') or
            path.startswith('/api/health')
        ):
            return self.get_response(request)

        if path.startswith('/api/'):
            auth = request.headers.get('Authorization', '') or request.headers.get('X-API-KEY', '')
            token = auth.replace('Bearer ', '')
            if token != self.api_key:
                return JsonResponse({'detail': 'Unauthorized'}, status=401)

        return self.get_response(request)
