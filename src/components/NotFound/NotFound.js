import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/notfound/notfound.png';

const NotFound = () => {
	return (
		<div>
			<div className="text-center m-3">
				<img width="400px" src={notfound} alt="" />
				<h1>Page not Found!</h1>
				<Link to="/home">
					<button className="btn btn-danger">Back to Home</button>
				</Link>
			</div>
		</div>
	);
};

export default NotFound;