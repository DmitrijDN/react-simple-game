import React from 'react';
import ReactDOM from 'react-dom';

import Question from './questionComponent.jsx';
import Answer from './answerComponent.jsx';
import Accept from './acceptComponent.jsx';

class Game extends React.Component{
	render() {
		return (
			<div className="wrapper">
				<Question />
				<Accept />
				<Answer />
			</div>
		);
	}
}

ReactDOM.render(<Game />, document.getElementById('root'));