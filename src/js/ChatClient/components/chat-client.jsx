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
      <div className="chat-container">
        <h1>React - chat client</h1>
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

    var message = {body: text,
     sender:{
       name:'Stieve',
       imageUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAP8AAAAJGQ3Nzc0ZGQ3LTM2MzktNDA5MS05YzZkLWRjYzdhM2M2MGVmNA.jpg'
      }
    };

    chatActions.sendMessage(message);
  }
});

module.exports = ChatClient;
