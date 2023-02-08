import React from "react";
import "./Work.css";
import { SiGithub } from "react-icons/si";

const Work = ({ data }) => {
	console.log(data);
	const siteBtn = () => {
		console.log("Site");
	};
	const gitBtn = () => {
		console.log("Git");
	};
	return (
		<div className='projects-wrapper'>
			{data?.map((item) => (
				<div key={item.id} className='project'>
					<div className='img-div'>
						<img
							src={item.img}
							height={125}
							alt='img'
							className='img'
						/>
					</div>
					<div className='footer-wrapper'>
						<div className='name'>
							<h4>{item.name}</h4>
						</div>
						<div className='btns-div'>
							<a
								href={item.site}
								target='_blank'
								rel='noreferrer'
							>
								<button
									onClick={siteBtn}
									className='btn visit-btn'
								>
									Visit
								</button>
							</a>
							<a href={item.git} target='_blank' rel='noreferrer'>
								<button
									onClick={gitBtn}
									className='btn code-btn'
								>
									<SiGithub /> Code
								</button>
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Work;
