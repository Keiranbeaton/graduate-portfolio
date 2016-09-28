'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const portfolioApp = angular.module('portfolioApp', [require('angular-route')]);

require('./components')(portfolioApp);

portfolioApp.config(['$routeProvider', ($rp) => {
  $rp
  .when('/home', {
    template: require('./html/home.html')
  })
  .when('/projects', {
    template: require('./html/projects.html')
  })
  .when('/about', {
    template: require('./html/about.html')
  })
  .otherwise({
    redirectTo: 'home'
  });
}]);
