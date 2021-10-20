import React from 'react';
import useAuth from '../../hooks/useAuth';

const Account = () => {

const {user} = useAuth();

	return (
		<div>
		<img src={user.photoURL} alt="" />
		<h1>{user.displayName}</h1>
		<h4>Email: {user.email}</h4>
		
			
		</div>
	);
};

export default Account;