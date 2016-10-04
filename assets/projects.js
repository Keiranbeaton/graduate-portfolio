'use strict';

module.exports = [{
  name: 'Don\'t Stop Retrievin\'',
  title: 'A single page web app for Seattle dog owners to find nearby off leash areas',
  description: 'This page was a group project I worked on in my second class at Code Fellows. The idea behind the project was to give dog owners in Seattle a means of finding the closest off leash dog parks to them. As one of four members in the group, I worked on both Javascript and HTML/CSS. We pulled our data from the data.seattle.gov api, then filtered it to get just the parks that were relevant to our project. We also used the google maps api to show users where nearby parks were in relation to their current location.',
  displayName: 'dont-stop-retrievin',
  url: 'https://dont-stop-retrieving.herokuapp.com/',
  githubUrl: 'https://github.com/Keiranbeaton/dont-stop-retrieving',
  images: [{url: `${__dirname}/dsr-main.png`, text: 'Main Page View'}, {url: `${__dirname}/dsr-single.png`, text: 'Single Park View'}]
},
{
  name: 'Sports Messenger',
  title: 'A single page web app that allows residents of Seattle to find Seattle parks to play pick up sports at. We were working under time constraints so this app is still a work in progress.',
  description: 'This page was the final group project I completed at Code Fellows. I was one of three people in the group, and worked mostly on Javascript, both frontend and backend. Our goal was to create an app that allowed users to search local parks based on their sporting facilities, and to rate and comment on these parks so other users would be able to find the level of competition they were looking for. We also implemented a sign up and sign in function so that only registered users could view the site, and leave comments and ratings.',
  displayName: 'sports-messenger',
  url: 'https://stormy-fjord-91599.herokuapp.com/#/home',
  githubUrl: 'https://github.com/sports-messenger/sports-messenger',
  images: [{url: '../../../../assets/sm-home.png', text: 'Main Page View'}, {url:'../../../../assets/sm-signin.png', text: 'Sign In View'}]
}];
