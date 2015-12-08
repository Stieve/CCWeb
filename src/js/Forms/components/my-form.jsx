"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;

var MyForm = React.createClass({

  getInitialState: function(){
    return {name: 'Ordina'};
  },

  handleSubmit: function(event){
    event.preventDefault();
    var name = ReactDOM.findDOMNode(this.refs.name);
    // Do something with the value
    name.value = '';
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Ordina" ref="name" />
      </form>
    );
  }

});

module.exports = MyForm;
