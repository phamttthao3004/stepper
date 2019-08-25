import React from 'react';
import './styles/style.css';
import Stepper, { STEPPER_DIRECTION } from './Stepper';
import GLOBAL_FUNCTIONS from './scripts/global-functions';

const STEP = [
	{ activeKey: 1, title: 'Supplier' },
	{ activeKey: 2, title: 'Basic Infomation' },
	{ activeKey: 3, title: 'Language' },
	{ activeKey: 4, title: 'Sample' },
];

const App = () => {
	const [stateV, setStateV] = React.useState({
		active: 1,
		visited: [],
		activated: STEP[0],
	});
	const [stateH, setStateH] = React.useState({
		active: 1,
		visited: [],
		activated: STEP[0],
	});
	const onChangeHorizontal = step => {
		const arr_visited = STEP.filter(e => {
			return e.activeKey < step;
		});
		const arr_activated = STEP.filter(e => {
			return e.activeKey === step;
		});
		setStateH(
			GLOBAL_FUNCTIONS.SetObject(stateH, {
				active: step,
				visited: arr_visited,
				activated: arr_activated,
			})
		);
	};
	const onChangeVertical = step => {
		const arr_visited = STEP.filter(e => {
			return e.activeKey < step;
		});
		const arr_activated = STEP.filter(e => {
			return e.activeKey === step;
		});
		setStateV(
			GLOBAL_FUNCTIONS.SetObject(stateV, {
				active: step,
				visited: arr_visited,
				activated: arr_activated,
			})
		);
	};
	const props_h = {
		onChange: onChangeHorizontal,
		activeStepKey: stateH.active,
		data: STEP,
		direction: STEPPER_DIRECTION.HORIZONTAL,
	};
	const props_v = {
		onChange: onChangeVertical,
		activeStepKey: stateV.active,
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
