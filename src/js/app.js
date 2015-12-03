'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;

var HelloWorld = React.createClass({

  render: function() {
    return (
      <div>Hello World!!!</div>
    );
  }
});

ReactDOM.render(<HelloWorld/>, document.getElementById('react-container'));
