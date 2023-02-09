import React, { useEffect, useState } from "react";
import "./Footer.css";
import wave from "../../assets/images/wave.svg";
import { SiWhatsapp } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
	const [showbtn, setShowBtn] = useState(false);
	const listenToScroll = () => {
		let minHeight = 600;
		const winScrill =
			document.body.scrollTop || document.documentElement.scrollTop;
		if (winScrill > minHeight) {
			setShowBtn(true);
		} else {
			setShowBtn(false);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", listenToScroll);
		return () => window.removeEventListener("scroll", listenToScroll);
	}, []);
	const goToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};
	return (
		<div className='footer-wrapper' id='footer'>
			<h1>Contact</h1>
			<div className='footer-content'>
				<a
					href='mailto:adinarayana4444@gmail.com'
					target='_blank'
					rel='noreferrer'
				>
					<SiGmail size={50} color='#fca61f' />
				</a>
				<a
					href='https://wa.me/+918897877531'
					target='_blank'
					rel='noreferrer'
				>
					<SiWhatsapp size={50} color='#fca61f' />
				</a>
				<a
					href='https://www.linkedin.com/in/adi4444/'
					target='_blank'
					rel='noreferrer'
				>
					<SiLinkedin size={50} color='#fca61f' />
				</a>
			</div>
			{showbtn && (
				<div className='topbtn' onClick={goToTop}>
					<FaArrowUp className='totop--icon' />
				</div>
			)}
			<img src={wave} alt='wave' className='wave' />
			<div className='copyright'>Copyright © 2023 by Adiweb.dev</div>
		</div>
	);
};

export default Footer;
