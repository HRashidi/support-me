import React from 'react';
import jumpTo from '../../modules/navigation';

import Breadcrumb from '../../components/breadcrumb/breadcrumb.component';
import './checkout-page.styles.scss';

const CheckoutFailure = () => {
	let bread_items = [
		{title: 'Home', routeName: `${process.env.PUBLIC_URL}`},
		{title: 'checkout', routeName: `${process.env.PUBLIC_URL}/success`},
	];
	
	return (
		<div className="checkout-page">
			<Breadcrumb items={bread_items} />
			<div className="donation-message error">
				<p>
					Your donation is not confirmed, please try again
				</p>
				<div onClick={()=> jumpTo('/')}>
					<span className="link">
						Go Back
					</span>
				</div>
			</div>
		</div>
)};
	
export default CheckoutFailure;
