import React from "react";
import "./Footer.css";
import wave from "../../assets/images/wave.svg";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiGmail } from "react-icons/si";

const Footer = () => {
	return (
		<div className='footer-wrapper'>
			<h1>Contect</h1>
			<div className='footer-content'>
				<a
					href='https://github.com/adi-4444'
					target='_blank'
					rel='noreferrer'
				>
					<SiGithub size={40} color='#fca61f' />
				</a>
				<a
					href='https://www.linkedin.com/in/adi4444/'
					target='_blank'
					rel='noreferrer'
				>
					<SiLinkedin size={40} color='#fca61f' />
				</a>
				<a
					href='mailto:adinarayana4444@gmail.com'
					target='_blank'
					rel='noreferrer'
				>
					<SiGmail size={40} color='#fca61f' />
				</a>
			</div>
			<img src={wave} alt='wave' className='wave' />
			<div className='copyright'>Copyright © 2023 by Adiweb.dev</div>
		</div>
	);
};

export default Footer;
