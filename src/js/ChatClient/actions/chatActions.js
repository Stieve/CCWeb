'use strict';

var appDispatcher = require('../dispatcher/appDispatcher');
var actionTypes = require('../constants/actionTypes');

var ChatActions = {
  sendMessage: function(message){
    appDispatcher.dispatch({
      actionType: actionTypes.SEND_MESSAGE,
      message: message
    });
  }
};

module.exports = ChatActions;
