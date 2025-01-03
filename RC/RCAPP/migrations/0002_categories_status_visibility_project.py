# Generated by Django 5.1 on 2024-12-28 20:07

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('RCAPP', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Categories',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(max_length=150)),
            ],
        ),
        migrations.CreateModel(
            name='Status',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(max_length=150)),
            ],
        ),
        migrations.CreateModel(
            name='Visibility',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('visibility', models.CharField(max_length=150)),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('project_name', models.CharField(max_length=150)),
                ('project_description', models.CharField(max_length=1000)),
                ('create_date', models.DateField()),
                ('last_update', models.DateField()),
                ('secret_code', models.IntegerField()),
                ('secret_code_2', models.IntegerField()),
                ('secret_code_3', models.IntegerField()),
                ('secret_code_for_owners', models.IntegerField()),
                ('dislike_count', models.ManyToManyField(related_name='dislike_count', to=settings.AUTH_USER_MODEL)),
                ('favorite_count', models.ManyToManyField(related_name='favorite_count', to=settings.AUTH_USER_MODEL)),
                ('invite_in_request', models.ManyToManyField(related_name='people_who_wants_to_join', to=settings.AUTH_USER_MODEL)),
                ('invite_out_request', models.ManyToManyField(related_name='people_who_we_invite', to=settings.AUTH_USER_MODEL)),
                ('like_count', models.ManyToManyField(related_name='like_count', to=settings.AUTH_USER_MODEL)),
                ('project_category', models.ManyToManyField(related_name='project_categories', to='RCAPP.categories')),
                ('project_members', models.ManyToManyField(related_name='project_members', to=settings.AUTH_USER_MODEL)),
                ('project_owner', models.ManyToManyField(related_name='project_owner', to=settings.AUTH_USER_MODEL)),
                ('view_count', models.ManyToManyField(related_name='view_count', to=settings.AUTH_USER_MODEL)),
                ('project_status', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='project_status', to='RCAPP.status')),
                ('project_visibility', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='project_visibility', to='RCAPP.visibility')),
            ],
        ),
    ]
