from django.db import models

# Create your models here.

class Employee(models.Model):
  name=models.CharField(max_length=100)
  salary=models.IntegerField()
  address=models.CharField(max_length=100,default="")
  team=models.CharField(max_length=100,default="")
  gender=models.CharField(max_length=100,default="")
  date=models.DateField(auto_now_add=True)

  def __str__(self):
    return self.name
    