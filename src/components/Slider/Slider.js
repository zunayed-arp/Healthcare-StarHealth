import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import banner1 from '../../images/slider/slider-1.jpg';
import banner2 from '../../images/slider/slider-2.jpg';
import banner3 from '../../images/slider/slider-3.jpg';
import './Slider.css';

const Slider = () => {

	return (
		<Container>
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100 img-size"
						src={banner1}
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>Emergency Operation Theater</h3>
						<p>An operating theater is a facility within a hospital where surgical operations are carried out in an aseptic environment. Historically, the term "operating theatre" referred to a <non-sterile className=""></non-sterile></p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={banner2}
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h3>Our Doctors</h3>
						<p>Best Doctors from all over the Country.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={banner3}
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Pathelogy and Imaging Services</h3>
						<p>High Quality Pathelogy and Imaging Services at a low cost.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>

		</Container>
	);
};

export default Slider;