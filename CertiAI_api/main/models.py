from django.db import models

# Instructor Model
class Instructor(models.Model):
    full_name=models.CharField(max_length=100) 
    email=models.CharField(max_length=100) 
    password=models.CharField(max_length=100)
    qualification=models.CharField(max_length=200) 
    mobile_no=models.CharField(max_length=20)
    address=models.TextField()

    class Meta:
        verbose_name_plural="1. Instructors"

# Test Category Model
class TestCategory(models.Model): 
    title=models.CharField(max_length=150) 
    description=models.TextField()

    class Meta:
        verbose_name_plural="2. Test Categories"

# Test Model
class Test(models.Model):
    category=models.ForeignKey(TestCategory, on_delete=models.CASCADE) 
    instructor=models.ForeignKey(Instructor, on_delete=models.CASCADE)
    title=models.CharField(max_length=150)
    description=models.TextField()

    class Meta:
        verbose_name_plural="3. Tests"

# TestTaker Model
class TestTaker(models.Model):
    full_name=models.CharField(max_length=100) 
    email=models.CharField(max_length=100) 
    password=models.CharField(max_length=100)
    qualification=models.CharField(max_length=200)
    mobile_no=models.CharField(max_length=20)
    address=models.TextField()
    interested_categories=models.TextField()

    class Meta:
        verbose_name_plural="4. Test Takers"