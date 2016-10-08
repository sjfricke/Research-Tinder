'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
 
 $routeProvider
 .when('/view1', {
    templateUrl: './view1.html',
    controller: 'View1Ctrl'
  })
 .when('/view2', {
    templateUrl: './view2.html',
    controller: 'View2Ctrl'
  })
 .when('/view3', {
    templateUrl: './view3.html',
    controller: 'View3Ctrl'
  })
 .otherwise({redirectTo: '/view1'});
    
}]);
