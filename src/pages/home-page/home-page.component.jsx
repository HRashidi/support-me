import React from 'react';
import WebPay from 'webpay-bahamta';
import config from '../../configs/bahamtaConfig';
import pjson from '../../../package.json';
import { setData } from '../../modules/storage';
import { priceFormatter } from '../../modules/common';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import useForm from '../../effects/use-form.effect';
import { goTo } from '../../modules/navigation';
import './home-page.styles.scss';

const HomePage = () => {

	const initialValues = {
		api_key : config.WEB_TOKEN,
		reference : 'donate-' + new Date().valueOf(),
		amount_irr: 50000,
		callback_url : pjson.homepage + 'result',
		payer_mobile: ''
	}
	console.log(initialValues.callback_url);
	const validate = values => null;

	const [errorMessage, setErrorMessage] = React.useState('');

	const onSubmit = async ({values : {api_key, reference, amount_irr, callback_url, payer_mobile}}) => {
		const payment_response = await WebPay.payment(api_key, reference, amount_irr, callback_url, payer_mobile);
		if(! payment_response.ok) {
			setErrorMessage(payment_response.error);
			return;
		}
		setData({api_key, reference, amount_irr});
		let { payment_url } = payment_response.result;
		goTo(payment_url);
	}

	let {values, handleChange, handleSubmit} = 
		useForm ({ initialValues, onSubmit, validate });
	
	return(
		<div className="home-page">
		<div className="title">
			Support My Works
		</div>

		<div className="desc">
			<p>
				If you are interested on my work, you can buy me a coffee by donating some mony
			</p>
			<p>
				🅇🄻🄾🅁🄳
			</p>
		</div>

		<div className="form-container">
			<form onSubmit={handleSubmit}>
				
				<FormInput 
					type='tel'
					name='payer_mobile'
					label="Mobile"
					defaultValue={values.payer_mobile}
					handleChange={handleChange}
					pattern="[0-9]{4}[0-9]{3}[0-9]{4}"
					placeholder='09**-***-****'
					required/>

				<FormInput 
					type='number'
					name='amount_irr'
					label='Amount'
					min="50000"
					step="10000"
					defaultValue={initialValues.amount_irr}
					handleChange={handleChange}
					required/>
				<div className="price-value">
					<span>{ priceFormatter(values.amount_irr)} Rials</span>
				</div>
				<CustomButton type="submit">
					Donate
				</CustomButton>
				{
					errorMessage && 
					<div className="error-message">
						<span>{errorMessage}</span>
					</div>
				}
			</form>
		</div>

			

		
	</div>
)}

export default HomePage;