import React from 'react';

import Breadcrumb from '../../components/breadcrumb/breadcrumb.component';
import jumpTo from '../../modules/navigation';
import './checkout-page.styles.scss';

const CheckoutSuccess = () => {
	let bread_items = [
		{title: 'Home', routeName: `${process.env.PUBLIC_URL}`},
		{title: 'checkout', routeName: `${process.env.PUBLIC_URL}/success`},
	];
	
	return (
		<div className="checkout-page">
			<Breadcrumb items={bread_items} />
			<div className="donation-message success">
				<p>
					Your Donation is is succeeded successfully, Thank you for your support
				</p>
				<div onClick={()=> jumpTo('/')}>
					<span className="link">
						Go Back
					</span>
				</div>
			</div>
		</div>
	)
};
	

export default CheckoutSuccess;
