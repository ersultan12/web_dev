from django.urls import path, re_path
from api import views

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:company_id>/', views.company_detail),
    path('companies/<int:company_id>/vacancies', views.vacancies_by_company),
    path('vacancies/', views.vacancies_list),
    path('vacancies/<int:company_id>/', views.vacancies_detail),
    path('vacancies/top_ten/', views.vacancies_top_ten),
]