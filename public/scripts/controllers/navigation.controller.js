/*jshint esversion:6 */
var myApp = angular.module('myApp');

myApp.controller('NavigationController', [
  '$scope',
  'UsersService',
  function($scope, UsersService) {
    $scope.username = '';
    $scope.welcomeMessage = '';

    $scope.loginUser = function() {
      return UsersService.loginUser(
        $scope.user.username,
        $scope.user.password
      ).then(thisUser => {
        window.localStorage.setItem('authorID', thisUser.id);
        $scope.username = '';
        $scope.welcomeMessage = 'Welcome ' + thisUser.name + '!';
      });
    };
  }
]);
