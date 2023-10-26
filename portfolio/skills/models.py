from django.db import models

# Create your models here.
class Skill(models.Model):
    name = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    experience_level = models.CharField(
        max_length=50,
        choices=[('Beginner', 'beginner'), ('Intermediate', 'intermediate'), ('Expert', 'Expert')]
    )