/*jshint esversion:6 */
var myApp = angular.module('myApp');

myApp.controller(
  'TopicsController', ['$scope', 'UsersService', function($scope, UsersService) {

    $scope.topics = [];

    return UsersService.getTopics()
    .then( theTopics => {
      console.log(theTopics);
      $scope.topics = theTopics;
    });
}]);