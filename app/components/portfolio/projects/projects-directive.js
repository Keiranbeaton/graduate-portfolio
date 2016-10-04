'use strict';

module.exports = (app) => {
  app.directive('kbProjects', function() {
    return {
      restrict: 'EAC',
      controller: 'ProjectsController',
      controllerAs: 'projCtrl',
      bindToController: true,
      template: require('./portfolio-template.html'),
      scope: {

      }
    };
  });
};
