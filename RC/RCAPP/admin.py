from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(User)
admin.site.register(Status)
admin.site.register(Visibility)
admin.site.register(Categories)
admin.site.register(Project)
admin.site.register(Mindmap)
admin.site.register(Chart)