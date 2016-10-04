'use strict';

module.exports = function(app) {
  app.controller('ProjectsController', ['$routeParams', '$rootScope', function($routeParams, $rootScope) {
    this.route = $routeParams.displayName;
    this.findProject = (routeName) => {
      $rootScope.projects.forEach((obj) => {
        if (obj.displayName === routeName) {
          this.project = obj;
          this.project.images.forEach((img) => {
            img.url = require('!file?name=img/[hash].[ext]');
          });
        }
      });
    };
  }]);
};
