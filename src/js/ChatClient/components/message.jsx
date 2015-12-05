var React = require('react');
var PropTypes = React.PropTypes;

var Message = React.createClass({

  _isMessageFromSender: function(){
    // Retrieve name of the sender, of the current message.
    var senderName = this.props.message.sender.name;

    // if it is we set the .self css
    if(senderName === 'Stieve'){
      return 'self';
    }
    // else set the .other css
    else{
      return 'other';
    }
  },

  render: function() {
    return (
      <li className={this._isMessageFromSender()}>
        <div className="avatar">
            <img src={this.props.message.sender.imageUrl}/>
        </div>
        <div className="message">
          {this.props.message.body}
        </div>
      </li>
    );
  }
});

module.exports = Message;
