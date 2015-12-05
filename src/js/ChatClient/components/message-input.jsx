'use strict';

var React = require('react');
var PropTypes = React.PropTypes;

var ENTER_KEY_CODE = 13;

var MessageInput = React.createClass({

  _onChange: function(event){
    this.setState({text: event.target.value});
  },

  _onKeyDown: function(event){
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      var text = this.state.text.trim();
      if (text) {
        this.props.onNewMessage(text);
      }
      this.setState({text: ''});
    }
  },

  getInitialState: function(){
    return {text: ''};
  },

  render: function() {
    return (
      <div className="message-composer">
        <textarea
         name="message"
         value={this.state.text}
         onChange={this._onChange}
         onKeyDown={this._onKeyDown} />
      </div>
    );
  }

});

module.exports = MessageInput;
