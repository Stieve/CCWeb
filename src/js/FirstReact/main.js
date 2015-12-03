"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var header1 = React.DOM.h1(null, "Tralala 1");
var header2 = React.DOM.h1(null, "Tralala 3");
var myDiv = React.DOM.div(null, [header1, header2]);

ReactDOM.render(myDiv, document.getElementById('react-container'));
