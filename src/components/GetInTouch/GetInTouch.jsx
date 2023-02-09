import React from "react";
import "./GetInTouch.css";

const GetInTouch = () => {
	return (
		<div className='contact-wrapper' id='getintouch'>
			<h1>Get in Touch</h1>
			<div className='contact-content'>
				<div className='contact-left'>
					<h4>Connect with me !</h4>
					<p>
						I would love to hear from you! If you have any questions
						or projects you'd like to discuss, feel free to reach
						out to me.
					</p>
					<div className='blur5'></div>
				</div>
				<div className='contact-form-div'>
					<form
						className='contact-form'
						action='https://formsubmit.co/3745203b2d86f0559b6e5dbe85bb0acf'
						method='POST'
					>
						<input
							type='hidden'
							name='_blacklist'
							value='spammy pattern, banned term, phrase'
						/>
						<input type='hidden' name='_template' value='table' />
						<input
							type='text'
							name='name'
							className='input username'
							placeholder='Name'
							autoComplete='off'
							required
						/>
						<input
							type='email'
							name='email'
							className='input useremail'
							placeholder='Email'
							autoComplete='off'
							required
						/>
						<input
							type='hidden'
							name='_autoresponse'
							value='Hey, Thanks for contacting me , Will be responded Soon.'
						/>
						<textarea
							name='message'
							className='input message'
							placeholder='Message'
							autoComplete='off'
							required
						/>
						<input
							type='submit'
							value='Send'
							className='submit-btn'
						/>
					</form>
					<div className='blur6'></div>
				</div>
			</div>
		</div>
	);
};

export default GetInTouch;
