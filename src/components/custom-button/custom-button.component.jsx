import React from 'react';

import './custom-button.styles.scss';

// ripple
const CustomButton = ({ children, inverted ,...otherProps }) => (
    <button {...otherProps} className={`custom-button ripple ${inverted?'inverted':''}`}>
        {children}
    </button>
)

export default CustomButton;