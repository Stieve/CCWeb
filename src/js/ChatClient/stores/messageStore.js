"use strict";

var appDispatcher = require('../dispatcher/appDispatcher');
var actionType = require('../constants/actionTypes');
var eventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _messages = [
  {body: 'message 1'},
  {body: 'message 2'}
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
      _messages.push({body: action.message});
      MessageStore.emitChange();
    break;
    default:
  }
});

module.exports = MessageStore;
