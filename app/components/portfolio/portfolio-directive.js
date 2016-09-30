'use strict';

module.exports = (app) => {
  app.directive('kbPortfolioPage', function() {
    return {
      restrict: 'EAC',
      controller: 'PortfolioController',
      controllerAs: 'portCtrl',
      bindToController: true,
      template: require('./portfolio-template.html')
    };
  });
};
