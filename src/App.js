import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { registerNav } from './modules/navigation';

import './App.scss';

import Header          from './components/header/header.component';
import HomePage        from './pages/home-page/home-page.component';
import CheckoutResult  from './pages/checkout-page/checkout-result.component';
import CheckoutSuccess from './pages/checkout-page/checkout-success.component';
import CheckoutFailure from './pages/checkout-page/checkout-failure.component';
import Footer          from './components/footer/footer.component';


const App = () => {
	let rootUrl = process.env.PUBLIC_URL;
	
	return (
		<div className="App">
			<Router ref={registerNav}>
				<Header />
				<Switch>
					<Route exact path={`${rootUrl}`} component={HomePage} />
					<Route exact path={`${rootUrl}/result`}  component={CheckoutResult} />
					<Route exact path={`${rootUrl}/success`} component={CheckoutSuccess} />
					<Route exact path={`${rootUrl}/failure`} component={CheckoutFailure} />
					<Redirect to={`${rootUrl}`} />
				</Switch>
				<Footer />
			</Router>
		</div>
	)
};


export default App;