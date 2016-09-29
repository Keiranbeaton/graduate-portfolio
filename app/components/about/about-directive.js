'use strict';

module.exports = function(app) {
  app.directive('kbAbout', function() {
    return {
      controller: 'AboutController',
      templateUrl: './about-template.html',
      bindToController: true,
      scope: {}
    };
  });
};
