from django.forms import model_to_dict
from django.http import JsonResponse
from .models import Abc


def test(request):
    data_queryset = Abc.objects.filter()[:100]
    data = []
    for each in data_queryset:
        item = {
            'id': each.id,
            'aa': each.aa,
            'bb': each.bb,
            'cc': each.cc,
            'dd': each.dd,
            'ee': each.ee,
            'create_time': each.create_time.strftime('%Y-%m-%d %H:%M'),
            'update_time': each.update_time.strftime('%Y-%m-%d %H:%M'),
        }
        data.append(item)
    return JsonResponse({'data': data, 'res': 'ok'})
