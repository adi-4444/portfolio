import React from "react";
import "./Right.css";
import img1 from "../../../assets/images/img1.png";
import blob1 from "../../../assets/images/blob1.png";
import blob2 from "../../../assets/images/blob2.png";
import crown from "../../../assets/images/crown.png";
import glassimoji from "../../../assets/images/glassesimoji.png";

const Right = () => {
	return (
		<div className='right-wrapper'>
			<div className='image-div'>
				<img className='vector' src={img1} alt='img1' height={400} />
				<img className='blob1' src={blob1} alt='blob1' height={400} />
				<img className='blob2' src={blob2} alt='blob2' height={400} />
				<div className='crown'>
					<img src={crown} alt='crown' height={50} />
					<span>
						Web <br /> Developer
					</span>
				</div>
				<img
					className='glassimoji'
					src={glassimoji}
					alt='glassimoji'
					height={100}
				/>
				<div className='blur1'></div>
				<div className='blur2'></div>
			</div>
		</div>
	);
};

export default Right;
