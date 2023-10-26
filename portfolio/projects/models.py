from django.db import models

# Create your models here.
class Project(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50)
    description = models.TextField()
    technologies = models.CharField( max_length=255)
    Project_url = models.URLField(blank=True, null=True)
    github_url = models.URLField()
    image = models.ImageField(upload_to='project_images/')
    completion_date = models.DateField()
    achievements = models.TextField(blank=True, null=True)