/*jshint esversion:6 */
angular.module('myApp')
.service('TopicsService', [ '$http', function($http) {

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
    getTopics: getTopics,
    getATopic: getATopic,
    createMessage: createMessage
  };

}]);