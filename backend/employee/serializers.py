from rest_framework import serializers
from .models import Employee

class EmployeeSerializer(serializers.ModelSerializer):
  class Meta:
    model=Employee
    #fields=['id','title','author','email','date']
    #fields=['id','title','author']
    fields='__all__' ##if you want to include all fields

 


