import axios from "axios";
import Auth from "./authenticate";

let URL = '/'
if(process.env.NODE_ENV === 'development'){
	// URL = 'http://localhost:5000'
	URL = 'https://speakerbazar.ir/'
}

// Interceptors handle network error
axios.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		if(!error.response) 
			error.response = {
				data: { message: "خطا در شبکه" },
				status: 500,
			};
		return Promise.reject(error.response);
	}
);

const serverCall = config => {
	// Header authorization
	if (Auth.user) {
		const token = Auth.getToken();
		config.headers = {
			authorization: token,
		};
	}
	
	config.baseURL = URL;
	config.timeout = 60 * .5 * 1000; // Let's say you want to wait at least .5 mins
	return axios(config);
};

export default serverCall;