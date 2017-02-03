import React from 'react';
import ReactDOM from 'react-dom';

const Accept = React.createClass({
	render() {
		return (
			<div className="btns-wrapper">
				<div className="btn btn-success btn-lg">
					<span className="glyphicon glyphicon-ok"></span>
				</div>
				<div className="btn btn-warning btn-xs">
					<span className="glyphicon glyphicon-refresh"></span>
				</div>
			</div>
		);
	}
});

export default Accept;