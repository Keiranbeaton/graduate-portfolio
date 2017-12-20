'use strict';

module.exports = [{
  name: 'Don\'t Stop Retrievin\'',
  title: 'A single page web app for Seattle dog owners to find nearby off leash areas',
  description: 'This page was a group project I worked on in my second class at Code Fellows. The idea behind the project was to give dog owners in Seattle a means of finding the closest off leash dog parks to them. As one of four members in the group, I worked on both Javascript and HTML/CSS. We pulled our data from the data.seattle.gov api, then filtered it to get just the parks that were relevant to our project. We also used the google maps api to show users where nearby parks were in relation to their current location.',
  displayName: 'dont-stop-retrievin',
  url: 'https://dont-stop-retrieving.herokuapp.com/',
  githubUrl: 'https://github.com/Keiranbeaton/dont-stop-retrieving',
  images: [{url: require('./dsr-main.png'), text: 'Main Page View'}, {url: require('./dsr-single.png'), text: 'Single Park View'}],
  technology: ['jQuery', 'Firebase']
},
{
  name: 'Cam\'s Big Idea',
  title: 'A website that connects older professionals with businesses in need of their experience and expertise.',
  description: 'This is a project I created for a friend\'s business idea. He wanted to create a site that would help older professionals who no longer want to work full time, but are still interested in lending their skills and knowledge to companies in a consulting role. They create a profile where they can list their experience, education and skills, along with how many hours a week they are looking to work. These profiles can then be accessed by companies via a search page, that will allow them to find someone who has the specific expertise they are in need of.',
  displayName: 'cams-big-idea',
  url: 'none',
  githubUrl: 'https://github.com/Keiranbeaton/cams-big-idea',
  images: [{url: require('./cbi-search.png'), text: 'Find Professionals View'}, {url: require('./cbi-edit-prof.png'), text: 'Edit Profile View'}],
  technology: ['AngularJS', 'Express', 'MongoDB', 'Node.js']
},
{
  name: 'Keiran\'s Trade Machine',
  title: 'A single page web application I made, similar to the NBA trade machine on ESPN.com.',
  description: 'This is my own version of the NBA trade machine one espn.com. The teams and players are dummy data, as this was purely a frontend development project. The app allows you to check if a trade between 2, 3 or 4 teams would be legal based on the salaries of the players being traded, the salary cap figures of each team involved, and the current NBA salary cap rules. I used AngularJS and a small amount of bootstrap to complete this, but the vast majority of the styling I did without the help of any libraries/frameworks. It was developed in a node environment, bundled using webpack, and is deployed on heroku.',
  displayName: 'trade-machine',
  url: 'https://trade-machine-prototype.herokuapp.com',
  githubUrl: 'https://github.com/Keiranbeaton/trade-machine',
  images: [{url: require('./tm-trade.png'), text: 'Pre-Trade View'}, {url: require('./tm-result.png'), text: 'Trade Results View'}],
  technology: ['AngularJS']
},
{
  name: 'Bracket Challenge',
  title: 'A single page application I made to determine who among my friends and I knows the most about the NBA (warning: Music by Nelly will play loudly when visiting the site)',
  description: 'This is a page I made to improve the NBA playoff challenge that my friends and I started a couple years ago. The page is built using AngularJS, on top of an express server and using MongoDB as a database. We had done this previously using shared Google Sheets, but I saw the chance to make the whole process quicker and easier for everyone so I went ahead and built a site.',
  displayName: 'basketball-bracket',
  url: 'https://bracket-time-of-year.herokuapp.com',
  githubUrl: 'https://github.com/Keiranbeaton/basketball-bracket',
  images: [{url: require('./bb-home.png'), text: 'Home View'}, {url: require('./bb-brackets.png'), text: 'Brackets View'}],
  technology: ['AngularJS', 'Express', 'MongoDB', 'Node.js']
},
{
  name: 'The Good Ping Pong Boys',
  title: 'Single Page application that keeps track of table tennis players overall win/loss records and scoring differentials, as well as their record and differential against each individual opponent they have faced.',
  description: 'This single page web app serves as a leaderboard, and allows users to submit player and game information to keep the statistics updated. Please ignore my win/loss record, which is very bad. The app was created using AngularJS, Node.js, Express.js and MongoDB.',
  displayName: 'good-ping-pong-boys',
  url: 'https://good-ping-pong-boys.herokuapp.com',
  githubUrl: 'https://github.com/Keiranbeaton/good-ping-pong-boys',
  images: [{url: require('./gpb-home.png'), text: 'Leaderboard'}, {url: require('./gpb-form.png'), text: 'Input Form'}],
  technology: ['AngularJS', 'Express', 'MongoDB', 'Node.js']
},
{
  name: 'Search Demo',
  title: 'A demo of a search tool that I created for a publishing company to show them how much easier their current system would be with a simple UI on top of it.',
  description: 'This is a demo of a search tool that takes in any of several ISBN numbers associated with this publishe\'s books, then returns the specific ISBN number that they need from one of their partners, as well as some basic information to ensure that the ISBN they gave was for the correct book. The list of books on which the searches are performed is saved on MongoDB, and can be updated by uploading a new excel file in the app.',
  displayName: 'search-tool',
  url: 'https://isbn-search-demo.herokuapp.com',
  githubUrl: 'https://github.com/Keiranbeaton/pearson-project',
  images: [{url: require('./isbn-main.png'), text: 'Main Search Tool'}],
  technology: ['AngularJS', 'Express.js', 'MongoDB', 'Node.js']
}];
