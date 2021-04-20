import React from 'react';
import { Link } from 'react-router-dom';

import './breadcrumb.styles.scss';

const Breadcrumb = ({items=[]}) => (
	<div className="breadcrumb">
		<ul>
			{
				items.map(({title, routeName}, index) => 
					index === items.length - 1?
					<li key={index}><span className="active">{title}</span></li>
					:
					<li key={index}><span><Link to={routeName}>{title}</Link></span></li>
				)
			}
		</ul>
	</div>
);


export default Breadcrumb;