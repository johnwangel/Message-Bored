/*jshint esversion:6 */

angular.module('myApp').service('UsersService', [
  '$http',
  function($http) {
    function getUsers() {
      return $http({ method: 'GET', url: '/api/users/' }).then(allUsers => {
        console.log(allUsers);
        return allUsers.data;
      });
    }

    function getUserHome(id) {
      return $http({
        method: 'GET',
        url: `/api/users/${id}`
      }).then(allUsers => {
        return allUsers.data;
      });
    }

    function createUser(username) {
      return $http({
        method: 'POST',
        url: '/api/users/',
        data: { name: username }
      }).then(currUser => {
        console.log(currUser);
        return currUser.data;
      });
    }

    return {
      getUsers: getUsers,
      getUserHome: getUserHome,
      createUser: createUser
    };
  }
]);
