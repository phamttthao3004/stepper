import React from 'react';
import './styles/less/style.css';
import PropTypes from 'prop-types';
import Stepper, { STEPPER_DIRECTION } from './Stepper';

const STEP = [
	{ activeKey: 1, title: 'Supplier' },
	{ activeKey: 2, title: 'Basic Infomation' },
	{ activeKey: 3, title: 'Language' },
	{ activeKey: 4, title: 'Sample' },
];

const App = () => {
	const [activeHorizontalKey, setStateHorizontal] = React.useState(1);
	const [activeVerticalKey, setStateVertical] = React.useState(1);
	const onChangeHorizontal = step => {
		setStateHorizontal(step);
	};
	const onChangeVertical = step => {
		setStateVertical(step);
	};
	const props_h = {
		onChange: onChangeHorizontal,
		activeStepKey: activeHorizontalKey,
		data: STEP,
		direction: STEPPER_DIRECTION.HORIZONTAL,
	};
	const props_v = {
		onChange: onChangeVertical,
		activeStepKey: activeVerticalKey,
		data: STEP,
		direction: STEPPER_DIRECTION.VERTICAL,
	};
	return (
		<div className="App container">
			<h2>HORIZONTAL</h2>
			<Stepper {...props_h} />
			<br />
			<h2>VERTICAL</h2>
			<Stepper {...props_v} />
		</div>
	);
};

export default App;
