import React from 'react';
import BlogHome from '../BlogHome/BlogHome';
import DoctorsHome from '../DoctorsHome/DoctorsHome';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
	return (
		<div>
			<Slider></Slider>
			<Services></Services>
			<DoctorsHome></DoctorsHome>
			<BlogHome></BlogHome>
		</div>
	);
};

export default Home;