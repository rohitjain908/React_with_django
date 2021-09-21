from django.db import models

# Create your models here.

class Employee(models.Model):
  name=models.CharField(max_length=100)
  salary=models.IntegerField()
  email=models.EmailField(max_length=100)
  date=models.DateField(auto_now_add=True)

  def __str__(self):
    return self.name
    