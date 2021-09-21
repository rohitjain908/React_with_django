from .models import Employee
from .serializers import EmployeeSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

class EmployeeAPIView(APIView):

  def get(self,request):
    articles=Employee.objects.all()
    serialize=EmployeeSerializer(articles,many=True)
    return Response(serialize.data)

  def post(self,request):
    serialize=EmployeeSerializer(data=request.data)

    if serialize.is_valid():
      serialize.save()
      return Response(serialize.data,status=status.HTTP_201_CREATED)
    return Response(serialize.errors,status=status.HTTP_400_BAD_REQUEST)

class EmployeeDetails(APIView):

  def get_object(self,id):
    try:
      return Employee.objects.get(id=id)
    except Employee.DoesNotExist:
      return Response(status=status.HTTP_404_NOT_FOUND)

  def get(self,request,id):
    try:
      article=Employee.objects.get(id=id)
    except Employee.DoesNotExist:
      return Response(status=status.HTTP_404_NOT_FOUND)
    serialize=EmployeeSerializer(article)
    return Response(serialize.data)

  def put(self,request,id):
    try:
      article=Employee.objects.get(id=id)
    except Employee.DoesNotExist:
      return Response(status=status.HTTP_404_NOT_FOUND)
    serialize=EmployeeSerializer(article,data=request.data)
    if serialize.is_valid():
      serialize.save()
      return Response(serialize.data)

    return Response(serialize.errors,status=status.HTTP_400_BAD_REQUEST)

  def delete(self,request,id):
    try:
      article=Employee.objects.get(id=id)
    except Employee.DoesNotExist:
      return Response(status=status.HTTP_404_NOT_FOUND)
    article.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
