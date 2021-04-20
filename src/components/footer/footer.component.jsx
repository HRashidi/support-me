
import React from 'react';
import { FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa';

import './footer.styles.scss';

const Footer = () => {
	
	let whatsAppUrl  = "https://wa.me/989384151911";
	let instagramUrl = "https://www.instagram.com/Ho.rashidi";
	let FaGithubUrl  = "https://github.com/hrashidi";

	return(
    <div className="footer">
		<div className="social-media">
			<div className="social-media">
				<a className="icon" target="_blank" rel="noopener noreferrer" href={whatsAppUrl} ><FaWhatsapp  size={28} color='#25D366' /></a>
				<a className="icon" target="_blank" rel="noopener noreferrer" href={instagramUrl}><FaInstagram size={28} color='#E1306C' /></a>
				<a className="icon" target="_blank" rel="noopener noreferrer" href={FaGithubUrl}><FaGithub     size={28} color='#4078c0' /></a>
			</div>
		</div>
		<div className="copyright">
			Developed By XLORD
		</div>
		<div className="date">2021 &copy;</div>
    </div>
)};

export default Footer;