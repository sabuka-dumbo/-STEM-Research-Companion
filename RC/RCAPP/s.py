from .models import *

categories = [
    "Artificial Intelligence",
    "Machine Learning",
    "Robotics",
    "Data Science",
    "Computer Science",
    "Biotechnology",
    "Environmental Science",
    "Physics",
    "Chemistry",
    "Mathematics",
    "Engineering",
    "Neuroscience",
    "Medicine",
    "Astronomy",
    "Climate Science",
    "Materials Science",
    "Genetics",
    "Nanotechnology",
    "Oceanography",
    "Agriculture Science",
    # Additional categories
    "Social Sciences",
    "Economics",
    "Psychology",
    "Linguistics",
    "Philosophy",
    "Education",
    "Geography",
    "Anthropology",
    "Political Science",
    "History",
    "Law",
    "Ethics",
    "Sociology"
]

# Add categories to the database
for category in categories:
    Categories.objects.get_or_create(category=category)

print("Categories added successfully!")
