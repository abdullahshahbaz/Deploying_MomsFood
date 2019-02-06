"""momsFood URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from masterapp import views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('list/',include('list.urls',namespace='list-app')),
    path('product/',include('product_details.urls',namespace='product_detail-app')),
    path('',include('masterapp.urls',namespace='masterapp-app')),
    path('',views.index,name='index'),
    path('cart/',include('shoppingCart.urls',namespace='shoppingCart-app')),
    path('checkout/',include('checkoutapp.urls',namespace='checkoutapp-app')),
    path('quickview/',include('quickView.urls',namespace='quickview-app')),
    path('login/',include('login.urls',namespace='login-app')),
    path('signup/',include('signup.urls',namespace='signup-app')),
]

if settings.DEBUG:
    urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
