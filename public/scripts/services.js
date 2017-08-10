/*jshint esversion:6 */

angular.module('myApp')
.service('UsersService', [ '$http', function($http) {

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

  function createUser(username){
    return $http({ method: 'POST', url: '/api/users/', data: { name: username} })
    .then( currUser => {
      console.log(currUser);
      return currUser.data;
    });
  }

  function getTopics(){
    return $http({ method: 'GET', url: '/api/topics/'})
    .then( allTopics => {
      console.log(allTopics);
      return allTopics.data;
    });
  }

  function getATopic(id){
    return $http({ method: 'GET', url: `/api/messages/by-topic/${id}`})
    .then( theTopic => {
      console.log(theTopic);
      return theTopic.data;
    });
  }

  function createMessage(topicid, authorid, message){
    return $http({ method: 'POST', url: '/api/messages/', data: { body : message, author_id: authorid, topic_id: topicid }})
    .then( theTopic => {
      console.log(theTopic);
      return theTopic.data;
    });
  }

  return {
    getUsers: getUsers,
    getUserHome: getUserHome,
    createUser: createUser,
    getTopics: getTopics,
    getATopic: getATopic,
    createMessage: createMessage
  };

}]);