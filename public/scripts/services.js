/*jshint esversion:6 */

angular.module('myApp')
.service('UsersService', [ '$http', function($http) {

  let currUser = '';

  function getUsers(){
    return $http({ method: 'GET', url: '/api/users/'})
    .then( allUsers => {
      console.log(allUsers);
      return allUsers.data;
    });
  }

  function getUserHome(){
    return $http({ method: 'GET', url: '/api/users/3'})
    .then( allUsers => {
      return allUsers.data;
    });
  }

  // function createUser(name){
  //   return $http({ method: 'POST', url: '/api/users/', data: { name: name} })
  //   .then( currUser => {
  //     console.log(currUser);
  //     return currUser.data;
  //   });
  // }

  // function saveUser(){
  //   alert("hello");
  //   currUser = username;
  // }

  return {
    getUsers: getUsers,
    getUserHome: getUserHome,
    createUser: createUser,
    // saveUser: saveUser
  };
}]);