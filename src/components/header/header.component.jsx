import React from 'react';

import Logo from '../../assets/images/xlord.png';
import './header.styles.scss';


const Header = () => {
	return (
	<div className="header">
		<div className="logo-container">
			<div className="logo">
				<img src={Logo} alt="logo"/>
			</div>
			<div className="title">
				Support Me
			</div>
		</div>
	</div>
)};

export default Header;