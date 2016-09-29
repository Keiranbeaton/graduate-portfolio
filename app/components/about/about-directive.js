'use strict';

module.exports = function(app) {
  app.directive('kbAbout', function() {
    return {
      restrict: 'EAC',
      controller: 'AboutController',
      templateUrl: './about-template.html',
      bindToController: true,
      scope: {}
    };
  });
};
