'use strict';

var React = require('react');
var PropTypes = React.PropTypes;
var MessageList = require('./message-list');
var MessageInput = require('./message-input');
var messageStore = require('../stores/messageStore');
var chatActions = require('../actions/chatActions');

var ChatClient = React.createClass({

  /*
  getInitialState: function(){
    return {
      messages: [
        {body: 'message 1'},
        {body: 'message 2'}
      ]
    }
  },*/
  getInitialState:function(){
    return {messages: messageStore.getAllMessages()};
  },

  componentDidMount: function(){
    messageStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    messageStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        <h1>My Chat</h1>
        <MessageList messages={this.state.messages}/>
        <MessageInput onNewMessage={this._addNewMessage}/>
      </div>
    );
  },

  _onChange: function() {
    this.setState({messages: messageStore.getAllMessages()});
  },

  _addNewMessage: function(text){
    /*
    var messages = this.state.messages;
    messages.push({body: text});
    this.setState({messages: messages});
    */
    chatActions.sendMessage(text);
  }
});

module.exports = ChatClient;
