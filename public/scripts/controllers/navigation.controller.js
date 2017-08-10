/*jshint esversion:6 */
var myApp = angular.module('myApp');

myApp.controller(
  'NavigationController', ['$scope', 'UsersService', function($scope, UsersService) {

    $scope.username = '';
    $scope.welcomeMessage = '';

    $scope.createTheUser = function(){
      console.log('username from nav controller', $scope.username);
        return UsersService.createUser($scope.username)
        .then( thisUser => {
          window.localStorage.setItem('authorID', thisUser.id);
          $scope.username = thisUser.name;
          $scope.welcomeMessage = "Welcome " + thisUser.name + "!";
        });
    };
}]);