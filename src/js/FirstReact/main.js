"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var title1 = React.DOM.h3({className: 'title' }, "CC Web - React & Flux");
var p1 = React.DOM.p(null, "React is the most popular Facebook Javascript library ....");

var div1 = React.DOM.div({className:"ccDiv"}, [title1, p1]);


var title2 = React.DOM.h3({ className: 'title' }, "CC IoT - Internet of Things @ M$");
var p2 = React.DOM.p(null, "The Internet of Things does not need to be complicated ...");

var div2 = React.DOM.div({className:"ccDiv"}, [title2, p2]);


var header1 = React.DOM.h1(null, "CC microsoft meeting #10");

var myDiv = React.DOM.div({id:'mainDiv'}, [header1, div1, div2]);

ReactDOM.render(myDiv, document.getElementById('react-container'));
