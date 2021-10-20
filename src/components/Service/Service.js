import React from 'react';
import { ButtonGroup, Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ServiceDetails from '../ServiceDetails/ServiceDetails';


const Service = ({service}) => {

	const {id,name,img,description} = service;
	return (


		<Col>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src={img} />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					{/* <Card.Text>
						{description}
					</Card.Text> */}
					<Link to={`/service/${id}`}>
						<Button variant="primary">{name} Details </Button>
					</Link>
				</Card.Body>
			</Card>
		</Col>
		
	);
};

export default Service;