'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const angularRoute = require('angular-route');
const portfolioApp = angular.module('portfolioApp', [angularRoute]);

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
  .otherwise({
    redirectTo: 'home'
  });
}]);
