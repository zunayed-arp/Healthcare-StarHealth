import React from 'react';
import { Card, Col, Container, Row,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useDoctors from '../../hooks/useDoctors';

const DoctorsHome = () => {
	const { doctors } = useDoctors();
	return (
		<Container >
			<h1 className="mx-auto m-3 border">Doctors List</h1>

			<Row>
				{/* <Col xs={6} sm={4} md={3}> */}
				{
					doctors.slice(0,4).map(doctor => <DoctorAtHome
						key={doctor.id}
						doctor={doctor}
					></DoctorAtHome>)
				}
				{/* </Col> */}
			</Row>

		</Container>
	);
};



function DoctorAtHome ({ doctor }) {

	const { id, name, degree, img, specialities, practice_days } = doctor;

	return (
		<Col >
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
				
					<Link to="/doctors">
						<Button variant="primary">See Details </Button>
					</Link>
				</Card.Body>
			</Card>
		</Col>


	);

}

export default DoctorsHome;