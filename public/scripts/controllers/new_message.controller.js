/*jshint esversion:6 */
var myApp = angular.module('myApp');

myApp.controller(
  'NewMessageController', ['$scope', 'UsersService', function($scope, UsersService) {

    $scope.message_body = '';

    $scope.createTheMessage = function(){
        let topicID = window.localStorage.getItem('topicID');
        let userID = window.localStorage.getItem('authorID');
        let message = $scope.message;
        console.log("topic ", topicID, " user ", userID, " message ", message);
        return UsersService.createMessage(topicID, userID, message)
        .then( thisMessage => {
          console.log(thisMessage);
        });
    };
}]);