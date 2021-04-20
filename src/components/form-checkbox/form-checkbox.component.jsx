import React from 'react';

import './form-checkbox.styles.scss';


// https://jsfiddle.net/KyleMit/fj6n5vt2/
const FormCheckBox = ({handleChange, label, ...otherProps}) => (
	<div className="label-check">
		<div className="checkbox">
			<input onChange={handleChange}  {...otherProps} id={`checkbox-${otherProps.name}`}/>
			<label htmlFor={`checkbox-${otherProps.name}`}>
				<span>{label}</span>
			</label>
		</div>
	</div>
)

export default FormCheckBox;