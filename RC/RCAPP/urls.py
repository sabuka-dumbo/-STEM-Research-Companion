from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login/", views.login, name="login"),
    path("register/", views.register, name="register"),
    path("info/", views.info, name="info"),
    path("workspace/<int:PID>/", views.workspace, name="workspace"),

    ## fetchs
    path("save/", views.save_mindmap, name="save_mindmap"),
    path("load/<str:MN>", views.load_mindmap, name="load_mindmap"),
    path("list/", views.list_mindmaps, name="list_mindmaps"),
]