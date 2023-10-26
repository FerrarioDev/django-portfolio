from django.test import TestCase
from .models import Project

class ProjectModelTestCase(TestCase):
    def test_project_creation(self):
        project = Project.objects.create(
            title="Test Project",
            description="This is a test project",
            technologies="Django, React",
            github_url="https://github.com/test/project",
            completion_date="2023-01-01",
        )
        self.assertEqual(project.title, "Test Project")
        # Add more test assertions as needed