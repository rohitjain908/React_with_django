from django.urls import path
from .views import EmployeeAPIView,EmployeeDetails

urlpatterns = [
  path('employee_list',EmployeeAPIView.as_view()),
  path('employee_list/<int:id>',EmployeeDetails.as_view())
]