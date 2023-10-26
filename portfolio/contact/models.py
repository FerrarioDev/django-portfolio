from django.db import models

# Create your models here.
class Contact(models.Model):
    email = models.EmailField()
    phone = models.CharField(max_length=15, blank=True, null=True)
    linkedin_url = models.URLField(blank=True, null=True)
    address = models.CharField(blank=True, null=True, max_length=50)