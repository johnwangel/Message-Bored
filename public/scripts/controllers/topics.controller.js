/*jshint esversion:6 */
var myApp = angular.module('myApp');

myApp.controller(
  'TopicsController', ['$scope', 'TopicsService', function($scope, TopicsService) {

    $scope.topics = [];

    $scope.message_body = '';

    $scope.createTheMessage = function(){
        let topicID = window.localStorage.getItem('topicID');
        let userID = window.localStorage.getItem('authorID');
        let message = $scope.message;
        return TopicsService.createMessage(topicID, userID, message)
        .then( thisMessage => {
          $scope.topics.messages.push(thisMessage);
        });
    };

    return TopicsService.getTopics()
    .then( theTopics => {
      console.log(theTopics);
      $scope.topics = theTopics;
    });



}]);