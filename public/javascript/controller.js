'use strict';

angular.module('myApp')


.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
    
    $http.get("/api/university/byState/" + "MN").then(function(response){
        $scope.results = response.data;
    });
    
     
    $scope.test1 = "222test2"
    
    $scope.getID = function(objectPicked) {
        console.log(objectPicked.ID);
    }
    
}])

.controller('View2Ctrl', ['$scope', function($scope) {
    $scope.test2 = "222test2"
}])

.controller('View3Ctrl', ['$scope', function($scope) {
    $scope.test3 = "222test3"
}])
;