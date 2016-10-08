'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', [function($scope, $http) {
  $http.get("http://spencerfricke.com:3000/api/university/byState/AL")
    .then(function(response) {
        $scope.result = response.data;
        console.log(response);
        console.log(response.data);
    });
}]);
