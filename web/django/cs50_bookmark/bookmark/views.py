# Create your views here.
from django.shortcuts import render
from django.http import HttpResponse
import datetime
def current_datetime(request) :
    now = datetime.datetime.now()
    html = "<html><body>It is now %s.</body></html>" % now
    return HttpResponse(html)

def hello(request, username) :
    html = '<html><body>Hello, %s</body></html>' % username
    return HttpResponse(html)

def new_time(request) :
    sequence = list("Hello, SungChul, I'm tired.")
    return render(request, 'hello.html', {'examples' : sequence})

def index(request) :
    return render(request, 'index.html')

def index_test(request) :
    return render(request, 'test_index.html')