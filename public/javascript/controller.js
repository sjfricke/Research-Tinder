'use strict';

angular.module('myApp')


.controller('View1Ctrl', ['$scope', '$http', function($scope) {



}])

.controller('View2Ctrl', ['$scope', function($scope, $http) {

  $http.get("http://spencerfricke.com:3000/api/university/byState/" + "MN")
  .then(function(response){
      $scope.results = response.data;
  });


  $scope.test1 = "222test2"

  $scope.getID = function(objectPicked) {
      console.log(objectPicked.ID);
  }
}])

.controller('View3Ctrl', ['$scope', function($scope) {
    $scope.test3 = "222test3"
}])
;
