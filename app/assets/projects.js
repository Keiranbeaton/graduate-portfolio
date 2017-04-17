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
  name: 'Sports Messenger',
  title: 'A single page web app that allows residents of Seattle to find Seattle parks to play pick up sports at. We were working under time constraints so this app is still a work in progress.',
  description: 'This page was the final group project I completed at Code Fellows. I was one of three people in the group, and worked mostly on Javascript, both frontend and backend. Our goal was to create an app that allowed users to search local parks based on their sporting facilities, and to rate and comment on these parks so other users would be able to find the level of competition they were looking for. We also implemented a sign up and sign in function so that only registered users could view the site, and leave comments and ratings.',
  displayName: 'sports-messenger',
  url: 'https://stormy-fjord-91599.herokuapp.com/#/home',
  githubUrl: 'https://github.com/sports-messenger/sports-messenger',
  images: [{url: require('./sm-home.png'), text: 'Main Page View'}, {url: require('./sm-signin.png'), text: 'Sign In View'}],
  technology: ['Angular', 'Express']
},
{
  name: 'Cam\'s Big Idea',
  title: 'A website that connects older professionals with businesses in need of their experience and expertise.',
  description: 'This is a project I am working on for a friend. His idea is to create a site that will help professionals who no longer want to work full time but are still interested in lending their skills and knowledge to companies in a consulting role. They create a profile where they can list their experience, education and skills, along with how many hours a week they are looking to work. These profiles can then be accessed by companies via a search page, that will allow them ',
  displayName: 'cams-big-idea',
  url: 'https://kb-cam-project.herokuapp.com/',
  githubUrl: 'https://github.com/Keiranbeaton/cams-big-idea',
  images: [{url: require('./cbi-search.png'), text: 'Find Professionals View'}, {url: require('./cbi-edit-prof.png'), text: 'Edit Profile View'}]
},
{
  name: 'Keiran\'s Trade Machine',
  title: 'A single page web application I made, similar to the NBA trade machine on ESPN.com.',
  description: 'This is my own version of the NBA trade machine one espn.com. The teams and players are examples, as this was purely a frontend development project. I used AngularJS and a small amount of bootstrap to complete this, but the vast majority of the styling I did without the help of any libraries/frameworks. It was developed in a node environment, bundled using webpack, and is deployed on heroku.',
  displayName: 'trade-machine',
  url: 'https://trade-machine-prototype.herokuapp.com',
  githubUrl: 'https://github.com/Keiranbeaton/trade-machine',
  images: [{url: require('./tm-trade.png'), text: 'Pre-Trade View'}, {url: require('./tm-result.png'), text: 'Trade Results View'}]
},
{
  name: 'Bracket Challenge',
  title: 'A single page application I made to determine who among my friends and I knows the most about the NBA (warning: Music by Nelly will play loudly when visiting the site)',
  description: 'This is a page I made to improve the NBA playoff challenge that my friends and I started a couple years ago. The page is built using AngularJS, on top of an express server and using MongoDB as a database. We had done this previously using shared Google Sheets, but I saw the chance to make the whole process quicker and easier for everyone so I went ahead and built a site.',
  displayName: 'basketball-bracket',
  url: 'https://bracket-time-of-year.herokuapp.com',
  githubUrl: 'https://github.com/Keiranbeaton/basketball-bracket',
  images: [{url: require('./bb-home.png'), text: 'Home View'}, {url: require('./bb-brackets.png'), text: 'Brackets View'}]
}];
