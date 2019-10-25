# Group 15 - Matt Hudson, Tim Kuehner, Joseph Vitale

# Assignment 7 - User Experience & Integration Focus (team)
For this project, we created a web application which allows a user to visualize a GitHub repository's data retrieved from Augur's API. The user can search for a repository in order to display information about the commits per repo contributor, its pull request acceptance rate over time, and the current number of issues currently open. The commits per contributor visualization lists the individual commits for the top eight contributor and the total commits for all other contributors. This data is then displayed on a pie chart. The pull request visualization shows how the pull acceptance rate (pull requests merged/all pull requests) changes over time using a line graph. The issue backlog visualization shows how many issues are still currently open on the repository. 

## Getting Started

### View Running Instance
The running application can be found at the URL below.
```
 http://18.216.234.69/augur/ 
 ```
 Not all repositories have data that is retirevable from the API. For a demo, the rails repository is a good repo to use.

### Installing
To run the code on your local environment, install npm in the project4-group15/assignment7/code/assignment7Group15/ directory
```
npm install
```
Then, in the same directory, install ng2-charts using npm.
```
npm install ng2-charts@2.3.0 --save
```
You will also have to install Chart.js library (it is a peer dependency of this library) (more info can be found in the official chart.js documentation)
```
npm install chart.js --save
```
The code can then be run on localhost.
```
ng serve -o
```

## Built With
* [Angular](https://angular.io/docs) - The web framework used
* [Angular Material](https://material.angular.io/) - For UI components
* [ng2-chart](https://www.npmjs.com/package/ng2-charts) - For charts used to visualize data
* [Amazon EC2](https://docs.aws.amazon.com/ec2/index.html) - For deployment

## Authors
* **Joseph Vitale** - [JosephCVitale](https://github.com/PurpleBooth)
* **Matt Hudson**  - [hudso1898](https://github.com/hudso1898)
* **Tim Kuehner** - [TimKuehner](https://github.com/TimKuehner)
