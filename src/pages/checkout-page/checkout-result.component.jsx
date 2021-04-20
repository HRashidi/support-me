import React from 'react';
import qs from 'query-string';
import WebPay from 'webpay-bahamta';
import config from '../../configs/bahamtaConfig';
import jumpTo from '../../modules/navigation';
import { getData } from '../../modules/storage';
import Spinner from '../../components/spinner/spinner.component';
import './checkout-page.styles.scss';

const CheckoutResult = ({ location }) => {
	let respond = location.search;
	React.useEffect(()=> {
		
		const verifyPayment = async (reference, amount_irr) => {
			let verify_response = await WebPay.verify(config.WEB_TOKEN, reference, amount_irr);
			if(! verify_response.ok) {
				jumpTo(process.env.PUBLIC_URL + '/failure');
				return;
			}
			// let payment_info = verify_response.result;
			jumpTo(process.env.PUBLIC_URL + '/success');

		}

		let donationInfo = getData();
		const {reference, state } = qs.parse(location.search);
		if(!donationInfo || donationInfo.reference!==reference || state === 'error') {
			jumpTo(process.env.PUBLIC_URL + '/failure');
			return;
		}

		verifyPayment(donationInfo.reference, donationInfo.amount_irr);
	}, [respond]);
	
	return (
	<div className="checkout-page">
			<Spinner />
	</div>)
};


export default CheckoutResult;