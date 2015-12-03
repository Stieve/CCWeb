'use string';

var React = require('react');
var PropTypes = React.PropTypes;
var Message = require('./message.jsx')

var MessageList = React.createClass({

  render: function() {

    var messages = this.props.messages.map(function(message, index){
      return <Message body={message.body} key={index} />
    }, this);

    return (
      <ol>
        {messages}
      </ol>
    );
  }
});

module.exports = MessageList;
