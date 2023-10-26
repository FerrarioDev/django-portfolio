from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Project
        fields = (
            'id',
            'title',
            'description',
            'technologies',
            'project_url',
            'github_url',
            'image',
            'completion_date',
            'achievements',
        )