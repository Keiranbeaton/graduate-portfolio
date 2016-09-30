'use strict';

module.exports = function(app) {
  app.controller('PortfolioController', function() {
    this.projectArray = [{name: 'Don\'t Stop Retrievin\'', title: 'A single app web page for Seattle dog owners to find nearby off leash areas', description: 'This page was a group project I worked on in my second class at Code Fellows.', coverUrl: '../../../assets/dsr-cover.png'}];
  });
};
