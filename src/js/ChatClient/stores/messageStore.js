"use strict";

var appDispatcher = require('../dispatcher/appDispatcher');
var actionType = require('../constants/actionTypes');
var eventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _messages = [
  {body: 'message 1',
   sender:{
     name:'Stieve',
     imageUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAP8AAAAJGQ3Nzc0ZGQ3LTM2MzktNDA5MS05YzZkLWRjYzdhM2M2MGVmNA.jpg'
    }
  },
  {body: 'message 2',
   sender:{
     name: 'Stijn',
     imageUrl: 'https://media.licdn.com/media/p/2/005/082/077/1781602.jpg'
   }
  }
];

var MessageStore = assign({}, eventEmitter.prototype, {
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },

  getAllMessages: function(){
    return _messages;
  }
});

MessageStore.dispatchToken = appDispatcher.register(function(action){
  switch(action.actionType){
    case actionType.SEND_MESSAGE:
      _messages.push(action.message);
      MessageStore.emitChange();
    break;
    default:
  }
});

module.exports = MessageStore;
