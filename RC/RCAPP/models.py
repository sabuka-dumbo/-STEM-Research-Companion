from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    pass

class Categories(models.Model):
    category = models.CharField(max_length=150)

    def __str__(self):
        return "${self.category} category"

class Status(models.Model):
    status = models.CharField(max_length=150)

    def __str__(self):
        return "${self.status} status"

class Visibility(models.Model):
    visibility = models.CharField(max_length=150)

    def __str__(self):
        return "${self.visibility} visibility"


class Project(models.Model):
    project_name = models.CharField(max_length=150)
    project_description = models.CharField(max_length=1000)
    project_category = models.ManyToManyField(Categories, related_name="project_categories")
    project_status = models.ForeignKey(Status, on_delete=models.CASCADE, related_name="project_status")
    project_visibility = models.ForeignKey(Visibility, on_delete=models.CASCADE, related_name="project_visibility")
    create_date = models.DateField()
    last_update = models.DateField()
    project_owner = models.ManyToManyField(User, related_name="project_owner")
    project_members = models.ManyToManyField(User, related_name="project_members")
    invite_out_request = models.ManyToManyField(User, related_name="people_who_we_invite")
    invite_in_request = models.ManyToManyField(User, related_name="people_who_wants_to_join")
    secret_code = models.IntegerField()
    secret_code_2 = models.IntegerField()
    secret_code_3 = models.IntegerField()
    secret_code_for_owners = models.IntegerField()
    view_count = models.ManyToManyField(User, related_name="view_count")
    like_count = models.ManyToManyField(User, related_name="like_count")
    dislike_count = models.ManyToManyField(User, related_name="dislike_count")
    favorite_count = models.ManyToManyField(User, related_name="favorite_count")
    