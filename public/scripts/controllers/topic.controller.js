/*jshint esversion:6 */
var myApp = angular.module('myApp');

myApp.controller(
  'TopicController', ['$scope', '$routeParams', 'UsersService', function($scope, $routeParams, UsersService) {
    $scope.topic = [];

    return UsersService.getATopic($routeParams.id)
    .then( theTopic => {
      window.localStorage.setItem('topicID', $routeParams.id);
      $scope.topic = theTopic;
    });

}]);