import React from 'react';
import PropTypes from 'prop-types';

export const STEPPER_DIRECTION = {
	HORIZONTAL: 'horizontal',
	VERTICAL: 'vertical',
};

const Stepper = ({ direction, onChange, activeStepKey, data }) => {
	return (
		<div className={`stepper ${direction}`}>
			{data.map(step => {
				return (
					<div
						key={step.activeKey}
						className={`step${
							activeStepKey === step.activeKey
								? ' activated'
								: activeStepKey >= step.activeKey
								? ' visited'
								: ''
						}`}
						onClick={onChange.bind(this, step.activeKey)}
					>
						<p className="step-key">
							<span>{step.activeKey}</span>
						</p>
						<p className="title-key">{step.title}</p>
					</div>
				);
			})}
		</div>
	);
};
Stepper.propTypes = {
	direction: PropTypes.string,
	onChange: PropTypes.func,
	activeStepKey: PropTypes.number,
	data: PropTypes.instanceOf(Object),
};
Stepper.defaultProps = {
	direction: STEPPER_DIRECTION.HORIZONTAL,
	onChange: () => {},
	activeStepKey: 1,
	data: {},
};
export default Stepper;
