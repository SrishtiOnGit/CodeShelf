
from .views import snippet_list as snippet_list, snippet_detail
from django.urls import path

urlpatterns = [
    path("", snippet_list, name="snippet_list"),
    path("<int:pk>/", snippet_detail, name="snippet-detail"),
]
