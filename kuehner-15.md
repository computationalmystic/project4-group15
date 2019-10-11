# Project 4
## Tim Kuehner
### Group 15

[This is the Design Document](https://github.com/TimKuehner/twkyt7/blob/master/Miscellaneous/Requirements%20Analysis.docx)

## Professor To Do List
  * Create Class "Instructor"
  * Create Class "Course"
  * Create Class "Student
  * Create method "searchStudent(Student,Course)
    This method takes type Student and Course to search students in specific courses
  * Create method called "viewWork" (Course, string)
    This method takes type Course and prints out all files of specified type to view work or download
  * Create method called "changeGrade" (Student, Course, char)
    This method takes type Course and Student to search out students in specific courses and then takes a char to specify the grade that a student has.
  * Create method called "createGroup" (string[])
    This method takes an array of ID's that can be added into a group to create a group of TA's or Students with specific permissions.
  * Create method called "removeStudent (searchStudent(Student,Course))
    This method takes the output of the "searchStudent" method and removes student from a course
  * Create method called "lockSub" (Course, int)
    This method takes the Course class and changes the status of the specific course by changing a specific int that when passed through lockSub keeps submissions from being passed through for that course.
   
## TA To Do List
  * Create a class "TA"
  * Uses classes Student and Course
  * Create method "dowloadAssign" (searchStudent(Student,Course), string)
    This method takes the output of searchStudent and then matches the assignment the student has submitted based off of the string inputed by the TA.  The method then downloads the assignment as the corresponding file type that was submitted
  * Uses method "changeGrade"
  * Uses method "searchStudent"
  * Create method "manualSub" (searchStudent(Student,Course), string)
    This method is to be used if the method lockSub has been implemented by the professor.  It gives the ability to search up a student and match the assigment with the submitted string.  The method then temporarily overwrites the 'locked' status of the submission and allows the student to submit an assignment late.

## Student To Do List
  * Uses classes Student and Course
  * Creaste method "fileSub" (Student, file, string)
    This method is the main submission method and will do a varied amount of things.  The first thing is that it will match the Student with the authorized students in the Course class to verify the authenticity of the submission.  It will then take the file type and store it.  It will then match the file type as a string to make sure whether or not the file is of the correct type for submission, if not it will send an error and fail.
  * Create method "vdWork" (Student)
    This method will match the student submission to the authorized student within the account for authorization.  Then the method will display submitted work and unsubmitted work (with displayed deadlines) and give the option to download with the corresponding file type.
  * Create method "viewGroup" (Student, Course)
    This method allows for the student to view the groups they are appart of within a course by printing the "Groups" created within the corresponding Courses fields values.
