/*jshint esversion:6 */
var myApp = angular.module('myApp');

myApp.controller('NewAccountController', [
  '$scope',
  'UsersService',
  function($scope, UsersService) {
    $scope.createTheUser = function() {
      return UsersService.createUser(
        $scope.newuser.username,
        $scope.newuser.password
      ).then(thisUser => {
        window.localStorage.setItem('authorID', thisUser.id);
        $scope.newuser.username = '';
        $scope.newuser.passport = '';
      });
    };
  }
]);
