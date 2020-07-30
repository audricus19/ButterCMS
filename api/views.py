from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from butter_cms import ButterCMS

client = ButterCMS('14841f69b217e959bf8be2ba42a2d203fc814e45')

# Create your views here.

@api_view(['GET'])
def BlogView(request):
    data = client.posts.all({'page_size': 10, 'page': 1})
    return Response(data)