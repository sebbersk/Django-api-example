from django.contrib import admin
from .models import Post
# Register your models here.


class PostAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "author")
    list_display_links = ("id", "author")
    search_fields = ("title",)


admin.site.register(Post, PostAdmin)
