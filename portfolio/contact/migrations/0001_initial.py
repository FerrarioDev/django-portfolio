# Generated by Django 4.2.6 on 2023-10-26 15:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(blank=True, max_length=15, null=True)),
                ('linkedin_url', models.URLField(blank=True, null=True)),
                ('address', models.CharField(blank=True, max_length=50, null=True)),
            ],
        ),
    ]
