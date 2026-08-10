from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Snippet
from .serializers import SnippetSerializer


@api_view(["GET", "POST"])
def snippet_list(request):
    if request.method == "GET":
        snippets = Snippet.objects.all()
        serializer = SnippetSerializer(snippets, many=True)
        return Response(serializer.data)

    if request.method == "POST":
        serializer = SnippetSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=400)


@api_view(["GET", "PUT", "DELETE"])
def snippet_detail(request, pk):
    try:
        snippet = Snippet.objects.get(pk=pk)
    except Snippet.DoesNotExist:
        return Response({"error": "Snippet not found"}, status=404)

    if request.method == "GET":
        serializer = SnippetSerializer(snippet)
        return Response(serializer.data)

    if request.method == "PUT":
        serializer = SnippetSerializer(snippet, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=400)

    if request.method == "DELETE":
        snippet.delete()
        return Response(status=204)