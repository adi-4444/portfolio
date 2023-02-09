import React from "react";
import "./MySkills.css";
import vector2 from "../../assets/images/img2.png";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import blob1 from "../../assets/images/blob1.svg";

const MySkills = () => {
	return (
		<div className='myskills-wrapper' id='myskills'>
			<h1>My Skills</h1>
			<div className='myskills-content'>
				<div className='vector2'>
					<img src={vector2} alt='img2' height={400} />
					<div className='blur3'></div>
					<img src={blob1} alt='blob1' className='animblob' />
				</div>

				<div className='skills'>
					<div className='blur4'></div>

					<div className='skills-circle'>
						<div className='html secCircle'>
							<ImHtmlFive size={40} color='#E14E1D' />
						</div>
						<div className='css secCircle'>
							<SiCss3 size={40} color='#0277BD' />
						</div>
						<div className='js secCircle'>
							<SiJavascript size={40} color='#F0DB4F' />
						</div>
						<div className='react secCircle'>
							<SiReact size={40} color='#00CDF2' />
						</div>
						<div className='redux secCircle'>
							<SiRedux size={40} color='#7046B2' />
						</div>
						<div className='bootstrap secCircle'>
							<SiBootstrap size={40} color='#7311EC' />
						</div>
						<div className='sass secCircle'>
							<SiSass size={40} color='#CA689B' />
						</div>
						<div className='tailwind secCircle'>
							<SiTailwindcss size={40} color='#38BDF8' />
						</div>
						<div className='mui secCircle'>
							<SiMaterialui size={40} color='#00A7F2' />
						</div>
						<div className='git secCircle'>
							<FaGitAlt size={40} color='#F03C2E' />
						</div>
						<div className='github secCircle'>
							<SiGithub size={40} color='#242938' />
						</div>
						<h2
							className='skills-title'
							style={{ color: "#fca61f" }}
						>
							Skills
						</h2>
						<div className='skills-bg blue-circle'></div>
						<div className='skills-bg yellow-circle'></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MySkills;
