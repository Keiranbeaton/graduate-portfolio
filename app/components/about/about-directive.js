'use strict';

module.exports = (app) => {
  app.directive('kbAbout', function() {
    return {
      restrict: 'EAC',
      template: require('./about-template.html'),
    };
  });
};
