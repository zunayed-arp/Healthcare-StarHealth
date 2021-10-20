import React from 'react';
import { useParams } from 'react-router';

const MakeAppointment = () => {

	const {id} = useParams();

	

	return (
		<div>
			<h2>appointment{id} </h2>
			
		</div>
	);
};

export default MakeAppointment;