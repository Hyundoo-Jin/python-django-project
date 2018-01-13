from django.conf.urls import url
from django.contrib import admin

from cheapest import views as ch_views
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', ch_views.main),
]
