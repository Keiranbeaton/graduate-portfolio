'use strict';

module.exports = (app) => {
  app.directive('kbAbout', function() {
    return {
      restrict: 'EAC',
      controller: 'AboutController',
      template: require('./about-template.html'),
      bindToController: true,
      scope: {}
    };
  });
};
