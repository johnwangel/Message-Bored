/*jshint esversion:6 */
const express = require('express');
const router = express.Router();
let db = require('../../models');
let Users = db.users;
let Messages = db.messages;
let Topics = db.topics;

//respond with all users
router.get('/', getAllUsers);

//  respond with user and all messages author'd by this user
router.get('/:id', getUsersMesssages);

//create and respond with new user
router.post('/', createNewUser);

//get/
function getAllUsers(req, res){
  Users.findAll()
  .then ( function (allUsers) {
    res.send(allUsers);
  });
}

//get/id respond with user and all messages author'd by this user
function getUsersMesssages(req, res){
  let id = req.params.id;
  Users.findOne({ where : { id : id }, include: [{model: Messages, include: {model : Topics }}]})
  .then( usersMessages => {
    res.json(usersMessages);
  });
}

//post/
function createNewUser(req, res){
    let name = req.body.name;

    Users.findOne( { where: { name: name } } )
    .then( user => {
      if (user) {
        res.send(user);
        return;
      }
      Users.create( { name : name } )
      .then( user => {
        console.log(user.id);
        res.send(user);
      });
    })
    .catch( err => {
      console.log(err);
    });
}

module.exports = router;