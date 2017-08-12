/*jshint esversion:6 */
var myApp = angular.module('myApp');

myApp.controller('TopicsController', [
  '$scope',
  'TopicsService',
  function($scope, TopicsService) {
    $scope.topics = [];

    $scope.topic_name = '';

    $scope.createTheTopic = function() {
      let created_by = window.localStorage.getItem('authorID');
      let name = $scope.topic;
      return TopicsService.createTopic(created_by, name).then(thisTopic => {
        $scope.topics.push(thisTopic);
        $scope.topic = '';
      });
    };

    return TopicsService.getTopics().then(theTopics => {
      $scope.topics = theTopics;
    });
  }
]);
