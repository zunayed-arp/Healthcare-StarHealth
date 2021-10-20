import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = ({ doctor }) => {

	const { id, name, degree, img, specialities, practice_days } = doctor;

	return (

		<Col xs={6} sm={4} md={3}>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src={img} />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Text>
						{degree}
					</Card.Text>
					<Card.Text>
						Specialities: {specialities}
					</Card.Text>
					<Card.Text>
						Practice Days: {practice_days}
					</Card.Text>
					<Link to={`/doctor/${id}`}>
						<Button variant="primary">Make An Appointment </Button>
					</Link>
				</Card.Body>
			</Card>
		</Col>


	);
};

export default Doctor;