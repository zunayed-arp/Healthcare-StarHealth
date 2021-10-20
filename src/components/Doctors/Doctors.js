import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useDoctors from '../../hooks/useDoctors';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {

const {doctors} = useDoctors();

console.log(doctors);

	return (
		<Container >
			<h1 className="mx-auto m-3 border">Doctors List</h1>

			<Row>
				{/* <Col xs={6} sm={4} md={3}> */}
				{
					doctors.map(doctor => <Doctor
						key={doctor.id}
						doctor={doctor}
					></Doctor>)
				}
				{/* </Col> */}
			</Row>

		</Container>
	);
};

export default Doctors;