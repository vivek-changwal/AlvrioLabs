import '../styles/globals.css';
import '../styles/ourRates.css';
import '../styles/clients.css';
import '../styles/OurTeam.css';
import '../styles/WhatWeDo.css';
import '../styles/common.css'
import 'animate.css';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />;
			<ToastContainer />
		</>)
}

export default MyApp;
