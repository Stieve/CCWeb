'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(<div id='mainDiv'>
					<h1 >CC microsoft meeting #10</h1>
					<div className="ccDiv">
						<h3 className='title'>CC Web - React &amp; Flux</h3>
						<p>React is the most popular Facebook Javascript library ....</p>
					</div>
					<div className="ccDiv">
						<h3 className= 'title'>CC IoT - Internet of Things @ M$</h3>
						<p>The Internet of Things does not need to be complicated ...</p>
					</div>					
				</div>, 
				document.getElementById('react-container'));