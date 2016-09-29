'use strict';

module.exports = (app) => {
  app.directive('kbHome', function() {
    return {
      restrict: 'EAC',
      template: require('./home-template.html'),
      scope: {}
    };
  });
};
