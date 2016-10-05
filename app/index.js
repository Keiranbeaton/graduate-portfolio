'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const angularRoute = require('angular-route');
const portfolioApp = angular.module('portfolioApp', [angularRoute]);


portfolioApp.run(['$rootScope', function($rootScope) {
  $rootScope.projects = require('./assets/projects.js');
}]);

require('./components')(portfolioApp);

portfolioApp.config(['$routeProvider', ($rp) => {
  $rp
  .when('/home', {
    template: require('./html/home.html')
  })
  .when('/portfolio', {
    template: require('./html/portfolio.html')
  })
  .when('/about', {
    template: require('./html/about.html')
  })
  .when('/portfolio/:displayName',  {
    template: require('./html/projects.html'),
  })
  .otherwise({
    redirectTo: 'home'
  });
}]);
