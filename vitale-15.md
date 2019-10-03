# To Do List

## Design Document: 
https://github.com/JosephCVitale/jcv3m4/blob/master/assignments/Assignment%202.pdf

## Student Tasks
1. Log in to the system. 
  - Create a new class, student
  - Give student class two functions, login() and logout()
  - Give student the fields username and password
2. Select one of their currently enrolled courses.
  - Give student a field to list their courses and sections
  - Give student a method to display all courses from their course list
  - Give student a method to select course
3. Select assignment. 
  - Give student a method to display all assignments from a selected course
  - Give student a method to select assignment
4. Submit assignment.
  - Give student a method to upload a file to a database

## TA Tasks
1. Log in.
  - Create new class, TA
  - Give TA fields username and password
  - Give TA methods login() and logout()
2. Select a course which they are currently assisting with. 
 - Give TA fields course/section list
 - Give TA method to display courses in list
 - Give TA method to select course for further actions
3. Select the assignment they’d like to collect. 
  - Give TA method to view all assignments for selected course/section
  - Give TA method to select assignment in order to collect submissions
4. View all student submissions. 
  - Give TA method to view all files in database submitted for a selected assignment
5. Download submissions.
  - Give TA method to download files

## Instructor Tasks
1. Log in.
  - Create new class, instructor
  - Give instructor fields username, password
  - Give instructor methods login(), logout()
2. View their list of courses for this semester. 
  - Give instructor field course list
  - Give instructor method to display course list
3. Select course to manage.
  - Give instructor method to select from course list for further action
4. Manage (view, edit, add, remove) a course’s TA’s
  - Give instructor methods to manage course's TA's (view(), edit(), add(), remove()
5. Manage the course’s sections and students.
  - Give instructor similar method but for students in a course
6. Manage assignments.
  - Give instructor similar method but for assignments for a course
