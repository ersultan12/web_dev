from django.http import JsonResponse
from django.shortcuts import render

from api.models import *
# Create your views here.

def company_list(request):
    companies = Company.objects.all()
    companies_json = [c.to_json() for c in companies]
    return JsonResponse(companies_json, safe=False)

def company_detail(request, company_id):
    try:
        company = Company.objects.get(pk=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse(company.to_json(), status=200)


def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [v.to_json() for v in vacancies]
    print(vacancies_json)
    return JsonResponse(vacancies_json, safe=False)

def vacancies_detail(request, *args, **kwargs):
    vacancy_id = kwargs['id']
    try:
        vacancy = Vacancy.objects.get(pk=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse(vacancy.to_json(), status=200)

def vacancies_top_ten(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def vacancies_by_company(request, *args, **kwargs):
    cmp_id = kwargs['company_id']
    vacancies = Vacancy.objects.all().filter(company=cmp_id)
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)
