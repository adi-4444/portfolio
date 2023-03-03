import React from "react";
import "./About.css";
import developer from "../../assets/images/developer.gif";
// import Resume from "../../assets/doc/Resume.pdf";

const About = () => {
	return (
		<div className='about-section' id='about'>
			<h1 className='title'>About Me</h1>
			<div className='about-wrapper'>
				<div className='about-left'>
					<p className='about-discription'>
						I am a passionate front-end developer with a focus on
						building beautiful and intuitive web applications. My
						expertise lies in React, HTML, CSS, and JavaScript, and
						I have honed these skills through building several
						personal projects and completing a front-end development
						course. I am constantly exploring new ways to push the
						limits of what is possible in web development.I have a
						keen eye for detail and a focus on delivering
						high-quality solutions and I am always looking for new
						challenges and opportunities to grow as a developer. If
						you're looking for a dedicated and skilled React
						developer, I would love to hear from you.
					</p>
					<a
						href='https://drive.google.com/drive/folders/1aglzO7nh89nhBhmDwyCShDXNiALbge0w?usp=share_link'
						download='Adi Resume'
						target='_blank'
						rel='noreferrer'
					>
						<button className='resume-btn'>Resume</button>
					</a>
				</div>
				<div className='about-right'>
					<img
						src={developer}
						alt='lottie'
						className='lottie-image'
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
