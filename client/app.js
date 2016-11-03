'use strict';

// Declare app level module which depends on views and components
angular.module('myApp', [
  'ngRoute',
  'app.services',
  'loanlist'
]).
config(['$routeProvider', function($routeProvider) {
  // Render loanlist html in all cases
  $routeProvider
  .when('/', {
    templateUrl: 'app/loanlist/loanlist.html',
    controller: 'loanlistController'
  })
  .otherwise('/');
}])
