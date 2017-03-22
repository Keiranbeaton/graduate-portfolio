'use strict';

module.exports = function(app) {
  app.controller('PortfolioController', ['$rootScope', function($rootScope) {
    this.projectArray = $rootScope.projects;
    this.selected = 'All';

    this.techArray = ['All', 'Angular', 'Express', 'Firebase', 'jQuery', 'MongoDB'];
  }]);
};
