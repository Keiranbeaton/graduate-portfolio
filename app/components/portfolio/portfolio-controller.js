'use strict';

module.exports = function(app) {
  app.controller('PortfolioController', function() {
    this.project1 = {name: 'Don\'t Stop Retrievin\'', title: 'A single page web app for Seattle dog owners to find nearby off leash areas', description: 'This page was a group project I worked on in my second class at Code Fellows.', displayName: 'dont-stop-retrievin'};
    this.project2 = {name: 'Sports Messenger', title: 'A single page web app that allows residents of Seattle to find Seattle parks to play pick up sports at.', description: 'This page was the final group project I completed at Code Fellows.', displayName: 'sports-messenger'};
  });
};
