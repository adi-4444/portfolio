import React from "react";
import "./Work.css";
import { SiGithub } from "react-icons/si";

const Work = ({ data }) => {
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
					<div className='project-footer'>
						<div className='name'>
							<h4>{item.name}</h4>
						</div>
						<div className='btns-div'>
							<a
								href={item.site}
								target='_blank'
								rel='noreferrer'
							>
								<button className='btn visit-btn'>Visit</button>
							</a>
							<a href={item.git} target='_blank' rel='noreferrer'>
								<button className='btn code-btn'>
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
