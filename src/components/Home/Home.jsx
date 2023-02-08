import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Right from "./Right/Right";
import git from "../../assets/images/github.png";
import { SiGmail } from "react-icons/si";
import linked from "../../assets/images/linkedin.png";

const Home = () => {
	return (
		<div className='home-wrapper'>
			<div className='home-left'>
				<h2 className='site-logo'>Adiweb.dev</h2>
				<div className='title-top'>
					<h4>
						Hi , <span style={{ color: "#fca61f" }}>I'm</span>
					</h4>
				</div>
				<div className='typewrite-text'>
					<Typewriter
						options={{ autoStart: true, loop: true, delay: 75 }}
						onInit={(type) => {
							type.typeString(
								'<strong> <span style="color: #fca61f;">Adi </span>Narayana Reddy</strong>'
							)
								.pauseFor(1500)
								.deleteAll()
								.typeString(
									'<strong>A <span style="color: #fca61f;">Front End </span>Developer</strong>'
								)
								.changeDeleteSpeed(50)
								.pauseFor(2000)
								.start();
						}}
					/>
				</div>
				<div className='btn-div'>
					<button className='connect-btn'>Connect</button>
				</div>
				<div className='connect-links'>
					<a
						href='https://github.com/adi-4444'
						target='_blank'
						rel='noreferrer'
					>
						<img src={git} alt='git' height={50} />
					</a>
					<a
						href='mailto:adinarayana4444@gmail.com'
						target='_blank'
						rel='noreferrer'
					>
						<SiGmail size={52} color='#fca61f' />
					</a>
					<a
						href='https://www.linkedin.com/in/adi4444/'
						target='_blank'
						rel='noreferrer'
					>
						<img src={linked} alt='linkedin' height={50} />
					</a>
				</div>
			</div>
			<div className='home-right'>
				<Right />
			</div>
		</div>
	);
};

export default Home;
