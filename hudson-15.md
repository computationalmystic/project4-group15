# Matt Hudson - Project 4 Todo List Document

Design document reference: https://github.com/hudso1898/mrh4hd/blob/master/assignment-four/design.md

There are 3 main categories of work to do: 

	- 1: Configuration
	- 2: Front-end development
	- 3: Back-end development

## Configuration

**Priority 1** - needs to be done ASAP to enable application deployment

Overarching tasks to-do: Configuration of server hardware, configuration of software (Front-end server, back-end server, database server)

More detailed explanation - Machine (computer) connected to a network. Ideally, use cloud hosting (EC2 or similar) for a deployment environment. A Linux (Ubuntu) OS would be best for this kind of server. Needs sufficient memory (RAM - 1 or 2 GB) and file storage (at least 20 GB, if not more). 

Software: Configure Apache (service, directories, permissions, *HTTPS* etc), firewalls (allow remote access on SSH, allow HTTP/HTTPS), users (admin accounts, apache accounts, non-admin accounts on Linux), configure MySQL or MongoDB or firebase (depending on preferences - probably just MySQL), and creating those schemas if necessary. Also, setting up a domain name for the application. Afterwards, maintaining access and resolving issues that arise from this area.

*optional* create an identical test server if resources allow to enable a development testing environment. This would be extremely useful (and is common in the industry) to test the application running on a live server, but be separate from what clients use (the production server).

## Front-end development (Web service)

Priority 3/2 - This would bump up once the back-end is more complete. We need the front-end to access the application, but most of the functionality depends on back-end services/configuration being present *first*.

Overarching tasks: View/Controller (**Angular**) to run on a web server.

More detailed explanation/tasks: 1) Different pages(views): Login, Selecting Courses, Viewing Courses, Submitting Assignments, Viewing Assignments, viewing submissions, collect submissions, Instructor Management (managing students/tas/assignments), Administrator Management (managing instructors). We can represent these with components in Angular. 2) Styling. Using CSS/Material/Bootstrap/other frameworks to have a quicker development cycle, rather than writing our own styling at first. 3) Routing. Designing how URLs influence the views being displayed (done through Angular). 4) Using TS (the controller) to call services, which call the back-end through HTTP(S) requests to PHP/NodeJS/etc.

Two of us for sure have development experience in Angular, so this would be the ideal front-end framework to use. It would reduce turnaround time and the front-end developer can also test some aspects like layout/design locally.

## Back-end development (API service)

Priority 2 - We need server configuration first, but after that, this takes top priority. We need this API to allow data persistance and the core business logic of the application.

Overarching tasks: PHP, NodeJS/Express, connecting to the database

More detailed explanation: 1) Designing how the view/controller interacts with the model. Basically, design the interfaces and methods that the controller can call. (login, file uploads, collecting assignment submissions, viewing students, viewing assignments, managing instructors, managing a course...) These update the data and return information to the front-end. 2) Connecting with the database system within these methods 3) Handling routing for node servers for the interface designed.

Ideally, we would set up a Node/Express server to handle these requests. We could also use PHP, but it's outdated, and NodeJS would better suit an Angular application.
