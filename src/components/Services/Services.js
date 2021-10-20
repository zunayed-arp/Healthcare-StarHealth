import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

	const { services } = useServices();

	return (
		<Container >
			<h1 className="mx-auto m-3 border"> Our Services</h1>

			<Row  >
				{
					services.map(service => <Service
						key={service.id}
						service={service}
					></Service>)
				}
			</Row>

		</Container>
	);
};

export default Services;