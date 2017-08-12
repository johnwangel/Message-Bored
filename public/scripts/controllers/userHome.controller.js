/*jshint esversion:6 */
var myApp = angular.module('myApp');

myApp.controller('UserHomeController', [
  '$scope',
  '$routeParams',
  '$filter',
  'UsersService',
  function($scope, $routeParams, $filter, UsersService) {
    $scope.userData = [];

    return UsersService.getUserHome($routeParams.id).then(userData => {
      $filter('orderBy')(userData.messages, 'createdAt');
      $scope.userData = userData;
    });
  }
]);
