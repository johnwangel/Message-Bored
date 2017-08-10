/*jshint esversion:6 */
var myApp = angular.module('myApp');

myApp.controller(
  'UsersController', ['$scope', 'UsersService', function($scope, UsersService) {
   $scope.users = [];
   return UsersService.getUsers()
   .then( users => {
      $scope.users = users;
   });
}]);