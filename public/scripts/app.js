// creation uses a 2nd array argument to import dependencies
angular.module('myApp', ['ngRoute']);

// retrieval has only one argument
var myApp = angular.module('myApp');

myApp
.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'HomeController'
    })
    .when('/users', {
      templateUrl: 'users.html',
      controller: 'UsersController'
    })
    .when('/userHome', {
      templateUrl: 'userHome.html',
      controller: 'UserHomeController'
    })
    .when('/login', {
      templateUrl: 'login.html',
      controller: 'NavigationController'
    })
    .when('/topic/:id', {
      templateUrl: 'topic.html',
      controller: 'TopicController'
    })
    .otherwise({ redirectTo: '/' });
    $locationProvider.html5Mode(true);
}])
.run(['$rootScope', 'APP_VERSION', function($rootScope, APP_VERSION){
  console.log('running');
  $rootScope.version = APP_VERSION;
}]);