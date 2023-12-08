from django.contrib import admin
from . import models

admin.site.register(models.Instructor)
admin.site.register(models.Test)
admin.site.register(models.TestCategory)
admin.site.register(models.TestTaker)
