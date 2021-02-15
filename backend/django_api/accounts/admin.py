from django.contrib import admin
from .models import UserAccount
# Register your models here.


class UserAdmin(admin.ModelAdmin):
    list_display = ("id", 'email', 'name')
    list_display_links = ("id", 'name')
    search_fields = ("name",)


admin.site.register(UserAccount, UserAdmin)
