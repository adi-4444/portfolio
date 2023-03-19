import React from "react";
import Work from "./Work";
import "./works.css";

const Works = () => {
	const data = [
		{
			id: "11",
			name: "React CRM App",
			git: "https://github.com/adi-4444/React-CRM-App",
			site: "https://crm-app-eta.vercel.app/",
			img: "https://res.cloudinary.com/dzmiwefgs/image/upload/v1675925422/Portfolio%20Images/crm_sdnamx.png",
		},
		{
			id: "12",
			name: "React Movie Booking App",
			git: "https://github.com/adi-4444/React-Movie-Booking-App",
			site: "https://react-movie-booking.netlify.app/",
			img: "https://res.cloudinary.com/dzmiwefgs/image/upload/v1675925441/Portfolio%20Images/mba_qvfpoy.png",
		},
		{
			id: "15",
			name: "MERN Notes App",
			git: "https://github.com/adi-4444/MERN-Notes-App",
			site: "https://mern-notes-app-w9ko.onrender.com/",
			img: "https://res.cloudinary.com/dzmiwefgs/image/upload/v1675925423/Portfolio%20Images/mern_notes_r862ft.png",
		},
		{
			id: "4",
			name: "React Weather App",
			git: "https://github.com/adi-4444/react-weather-app",
			site: "https://react-wheather-app44.netlify.app/",
			img: "https://res.cloudinary.com/dzmiwefgs/image/upload/v1675925432/Portfolio%20Images/React_Weather_owywxm.png",
		},
		{
			id: "16",
			name: "React Tic Tac Toe",
			git: "https://github.com/adi-4444/react-tictactoe",
			site: "https://react-tictactoe44.netlify.app/",
			img: "https://res.cloudinary.com/dzmiwefgs/image/upload/v1678909126/Portfolio%20Images/Screenshot_2023-03-16_at_1.00.27_AM_xvd95y.png",
		},
		{
			id: "5",
			name: "React Todo using ContextAPI",
			git: "https://github.com/adi-4444/React-ToDo-App",
			site: "https://react-todo-contextapi44.netlify.app/",
			img: "https://res.cloudinary.com/dzmiwefgs/image/upload/v1675925424/Portfolio%20Images/Rect_Todo_using_ContextAPI_l081q2.png",
		},
		{
			id: "6",
			name: "React Crypto Tracker",
			git: "https://github.com/adi-4444/react-crypto-tracker",
			site: "https://react-crypto-tracker44.netlify.app",
			img: "https://res.cloudinary.com/dzmiwefgs/image/upload/v1675925423/Portfolio%20Images/crypto_tracker_cx43rh.png",
		},
		{
			id: "14",
			name: "React Redux Todo",
			git: "https://github.com/adi-4444/React-Todo-using-Redux",
			site: "https://react-redux-todo44.netlify.app/",
			img: "https://res.cloudinary.com/dzmiwefgs/image/upload/v1675925424/Portfolio%20Images/redux_todo_nznvrp.png",
		},
		{
			id: "1",
			name: "JS Calculator",
			git: "https://github.com/adi-4444/Calculator-JS",
			site: "https://js-calculator44.netlify.app/",
			img: "https://res.cloudinary.com/dzmiwefgs/image/upload/v1675925423/Portfolio%20Images/cals_js_qlbkak.png",
		},
		{
			id: "2",
			name: "JS Weather App",
			git: "https://github.com/adi-4444/Java-Script-Projects/tree/master/JS-Weather-App",
			site: "https://js-weather-app44.netlify.app/",
			img: "https://res.cloudinary.com/dzmiwefgs/image/upload/v1675925424/Portfolio%20Images/js_weather_y7w3of.png",
		},
		{
			id: "3",
			name: "JS Number Guess Game",
			git: "https://github.com/adi-4444/Java-Script-Projects/tree/master/Guess%20No",
			site: "https://js-no-guess-game.netlify.app/",
			img: "https://res.cloudinary.com/dzmiwefgs/image/upload/v1675925424/Portfolio%20Images/js_Guess_Game_lgdrbj.png",
		},

		{
			id: "7",
			name: "React Ecommerce category view",
			git: "https://github.com/adi-4444/React-Ecommerce",
			site: "https://react-ecomm-categories.netlify.app",
			img: "https://res.cloudinary.com/dzmiwefgs/image/upload/v1675925424/Portfolio%20Images/ecom_categories_alhi6e.png",
		},
		{
			id: "8",
			name: "React Library Project",
			git: "https://github.com/adi-4444/React-Library-Project",
			site: "https://rguktong-library.web.app/",
			img: "https://res.cloudinary.com/dzmiwefgs/image/upload/v1675925425/Portfolio%20Images/library_cqpm0w.png",
		},

		{
			id: "10",
			name: "React Ecommerce cart & filter",
			git: "https://github.com/adi-4444/GT-TeeRex",
			site: "https://gt-tee-rex.vercel.app/",
			img: "https://res.cloudinary.com/dzmiwefgs/image/upload/v1675925424/Portfolio%20Images/ecom_cart_filter_uaqib9.png",
		},

		{
			id: "13",
			name: "React Codepen Clone",
			git: "https://github.com/adi-4444/react-codepen-clone",
			site: "https://codepen-clone44.netlify.app",
			img: "https://res.cloudinary.com/dzmiwefgs/image/upload/v1675925422/Portfolio%20Images/codepen_clone_tvbnac.png",
		},

		{
			id: "9",
			name: "React College Syllabus",
			git: "https://github.com/adi-4444/React-clg-Syllabus-App",
			site: "https://rgukt-syllabus.netlify.app",
			img: "https://res.cloudinary.com/dzmiwefgs/image/upload/v1675925429/Portfolio%20Images/Syllabus_oebp6z.png",
		},
	];

	return (
		<div className='works-wrapper' id='works'>
			<div className='title-div'>
				<h1>My Recent Works</h1>
			</div>
			<div className='works-list'>
				<Work data={data} />
			</div>
		</div>
	);
};

export default Works;
