/*jshint esversion:6 */
var myApp = angular.module('myApp');

myApp.controller(
  'LatestController', ['$scope', 'TopicsService', function($scope, TopicsService) {
   return TopicsService.getLatestMessages()
   .then( latestPosts => {
      console.log(latestPosts);
      $scope.latest = latestPosts;
   });
}]);