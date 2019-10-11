# Group 15 Overview - Project 4

## Common Elements

We identified three main areas of development for this application:

	1) Server Hardware/Software Configuration (Cloud-hosting a Linux server, configuring Apache, SQL server, Node Server, etc)
	2) Front-end development (Angular development, creating components/views/routing those views, designing styling, using a styling framework)
	3) Back-end development (PHP, Node, etc. etc. - OO/Model&Controller approach to serve data)

The idea is that the front-end calls the back-end service to perform actions on behalf of the user. So in this design, the Angular web page is the View and the back-end
PHP/Node is the Controller, which interacts with the Model (an SQL or Firebase or MongoDB containing application information). Specific activites include the following:

1) Server Configuration: Setting up an EC2 server, configuring Apache, configuring the firewall, configuring different Linux users for admin access and database access, configuring the SQL server **PLUS** creating schemas for it. Also, configuring a node server if applicable, and resolving deployment issues. Also, if resources permit,
constructing an identical development server in addition to the already configured production server, for testing purposes.

2) Front-end: Components for Login, Course Page (view courses), Assignment Page (view assignments), Submit Assignment (for students), Manage Course (Instructor), Admin Management Page (for Administrators), Collection Page (for TAs/Instructors), etc. Adding and designing routing to each of these components. Selecting/designing styling (using a framework such as Bootstrap/Material would ease development efforts). Benefit of this is that the front-end developer can also test locally before deploying to the server. Write in component typescript/services that call the back-end services through HTTP requests.

3) Back-end: Creation of different classes/datatypes for Users (extends to Students, TAs, Instructors, Administrators), Courses, Assignments, Submissions, ..., used by the interface. Defining an interface (through different scripts/URLs using Express) to perform methods used to transfer files/data and to update the model.

Also, we'd need to setup a Github repository for the project, and create master/dev branches. Setup permissions on that repository as well to restrict master modification.

Ideally, each of us (3) focuses on one of these aspects. That way, we can develop components in parallel in order to develop more efficiently. The biggest priority is setting up server configuration, as the application can't be run without any of that; afterwards, back-end in conjunction with front-end takes the next priority. Some local development can occur, but having a testing/development environment would be very important.

## Next Steps

Assign each member a category of work according to the above description; we discussed our strengths and what we are most knowledge on to attain the following assignments: Joe: Front-end, Tim: Server Configuration, Matt: Back-end. We'd focus on server setup/architecture first, and creating the github repo; then, focus on front-end and back-end code developement. It would be important to coordinate between Joe (front-end) and Matt (back-end) to communicate the interface for the back-end; i.e. so Joe can anticipate how to call the services that Matt designs on the Node server. Create tasks for a sprint, and identify priorities, i.e. server configuration is more important than designing the course view component of the front-end, for example.
