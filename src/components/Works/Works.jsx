import React from "react";
import Work from "./Work";
import "./Works.css";

const Works = () => {
	const data = [
		{
			id: "1",
			name: "JS Calculator",
			git: "https://github.com/adi-4444/Calculator-JS",
			site: "https://js-calculator44.netlify.app/",
			img: "https://iili.io/HE3VEvV.png",
		},
		{
			id: "2",
			name: "JS Weather App",
			git: "https://github.com/adi-4444/Java-Script-Projects/tree/master/JS-Weather-App",
			site: "https://js-weather-app44.netlify.app/",
			img: "https://iili.io/HE3VjCg.png",
		},
		{
			id: "3",
			name: "JS Number Guess Game",
			git: "https://github.com/adi-4444/Java-Script-Projects/tree/master/Guess%20No",
			site: "https://js-no-guess-game.netlify.app/",
			img: "https://iili.io/HE3VN6J.png",
		},
		{
			id: "4",
			name: "React Weather App",
			git: "https://github.com/adi-4444/react-weather-app",
			site: "https://react-wheather-app44.netlify.app/",
			img: "https://iili.io/HE3VQa4.png",
		},
		{
			id: "5",
			name: "React Todo using ContextAPI",
			git: "https://github.com/adi-4444/React-ToDo-App",
			site: "https://react-todo-contextapi44.netlify.app/",
			img: "https://iili.io/HE3Vgjt.png",
		},
		{
			id: "6",
			name: "React Crypto Tracker",
			git: "https://github.com/adi-4444/react-crypto-tracker",
			site: "https://react-crypto-tracker44.netlify.app",
			img: "https://iili.io/HE3VGyB.png",
		},
		{
			id: "7",
			name: "React Ecommerce category view",
			git: "https://github.com/adi-4444/React-Ecommerce",
			site: "https://react-ecomm-categories.netlify.app",
			img: "https://iili.io/HE3VwGa.png",
		},
		{
			id: "8",
			name: "React Library Project",
			git: "https://github.com/adi-4444/React-Library-Project",
			site: "https://rguktong-library.web.app/",
			img: "https://iili.io/HE3Ve3v.png",
		},
		{
			id: "9",
			name: "React College Syllabus",
			git: "https://github.com/adi-4444/React-clg-Syllabus-App",
			site: "https://rgukt-syllabus.netlify.app",
			img: "https://iili.io/HE3VLFf.png",
		},
		{
			id: "10",
			name: "React Ecommerce cart & filter",
			git: "https://github.com/adi-4444/GT-TeeRex",
			site: "https://gt-tee-rex.vercel.app/",
			img: "https://iili.io/HE3VWj1.png",
		},
		{
			id: "11",
			name: "React CRM App",
			git: "https://github.com/adi-4444/React-CRM-App",
			site: "https://crm-app-eta.vercel.app/",
			img: "https://iili.io/HE3V1YQ.png",
		},
		{
			id: "12",
			name: "React Movie Booking App",
			git: "https://github.com/adi-4444/React-Movie-Booking-App",
			site: "https://react-movie-booking.netlify.app/",
			img: "https://iili.io/HE3Vi6G.png",
		},
		{
			id: "13",
			name: "React Codepen Clone",
			git: "https://github.com/adi-4444/react-codepen-clone",
			site: "https://codepen-clone44.netlify.app",
			img: "https://iili.io/HE3V03x.png",
		},
		{
			id: "14",
			name: "React Redux Todo",
			git: "https://github.com/adi-4444/React-Todo-using-Redux",
			site: "https://react-redux-todo44.netlify.app/",
			img: "https://iili.io/HEnMybf.png",
		},
		{
			id: "15",
			name: "MERN Notes App",
			git: "https://github.com/adi-4444/MERN-Notes-App",
			site: "https://mern-notes-app-w9ko.onrender.com/",
			img: "https://iili.io/HE3V8yN.png",
		},
	];

	return (
		<div className='works-wrapper'>
			<div className='title-div'>
				<h2>My Recent Projects</h2>
			</div>
			<div className='works-list'>
				<Work data={data} />
			</div>
		</div>
	);
};

export default Works;
