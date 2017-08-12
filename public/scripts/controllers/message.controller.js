/*jshint esversion:6 */
var myApp = angular.module('myApp');

myApp.controller('MessageController', [
  '$scope',
  '$routeParams',
  'TopicsService',
  function($scope, $routeParams, TopicsService) {
    $scope.topic = [];

    $scope.createTheMessage = function() {
      let topicID = window.localStorage.getItem('topicID');
      let userID = window.localStorage.getItem('authorID');
      let message = $scope.message;
      return TopicsService.createMessage(
        topicID,
        userID,
        message
      ).then(thisMessage => {
        $scope.message = '';
        $scope.topic.messages.push(thisMessage);
      });
    };

    return TopicsService.getATopic($routeParams.id).then(theTopic => {
      window.localStorage.setItem('topicID', $routeParams.id);
      $scope.topic = theTopic;
    });
  }
]);
