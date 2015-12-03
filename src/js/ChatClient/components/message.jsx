var React = require('react');
var PropTypes = React.PropTypes;

var Message = React.createClass({

  render: function() {
    return (
      <li>
        <div>{this.props.body}</div>
      </li>
    );
  }

});

module.exports = Message;
