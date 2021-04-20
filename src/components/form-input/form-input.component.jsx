import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className="group">
		{
			label?
			<label className={`form-label ${otherProps.required?'required':''}`}>
				<span>{label}</span>
			</label>
			:null
		}
		{
			otherProps.type==='textarea'?(
				<textarea className="form-input" onChange={handleChange} {...otherProps} />
			):(
				<input className="form-input" onChange={handleChange} {...otherProps} />
			)
		}
    </div>
)

export default FormInput;