'use string';

var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;
var Message = require('./message.jsx')

var MessageList = React.createClass({

  render: function() {

    var messages = this.props.messages.map(function(message, index){
      return <Message message={message} key={index} />
    }, this);

    return (
      <ol className="message-list" ref="messageList">
        {messages}
      </ol>
    );
  },

  componentDidUpdate: function(){
    this._scrollToBottom();
  },

  _scrollToBottom: function(){
    var ol = ReactDOM.findDOMNode(this.refs.messageList);
    ol.scrollTop = ol.scrollHeight;
  }
});

module.exports = MessageList;
