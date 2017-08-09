/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
let db = require('../../models');
let Users = db.users;
let Messages = db.messages;
let Topics = db.topics;

//respond with the latest 10 messages including the name of the topic including the author's name
router.get('/latest', getLatestMessages);

//  create and respond with the new message
router.post('/', createNewMessage);

//respond with all messages that belong to the topic by :topic_id including the author's name, including the topic's name, ordered by createdAt ascending
router.get('/by-topic/:topic_id', getMessagesByTopic);

function getLatestMessages(req, res){
  Messages.findAll({
    order : [['createdAt', 'DESC']],
    limit : 10,
    include : [ { model: Users}, { model : Topics } ] })
  .then( tenMessages => {
    res.send(tenMessages);
  });
}

function createNewMessage(req, res){
  let message = req.body.message;
  let userId = req.body.userId;
  let topicId = req.body.topicId;

  Messages.create( { body : message, author_id: userId, topic_id: topicId } )
    .then( message => {
      res.send(message);
  })
  .catch( err => {
    console.log(err);
  });
}

//get('/by-topic/:topic_id -- respond with all messages that belong to the topic by :topic_id including the author's name, including the topic's name, ordered by createdAt ascending
function getMessagesByTopic(req, res){
  let topicId = req.params.topic_id;

  Topics.findById(topicId,
    { include : { model : Messages, include : { model: Users} } })
  .then( allMessages => {
    res.send( allMessages );
  });
}

module.exports = router;