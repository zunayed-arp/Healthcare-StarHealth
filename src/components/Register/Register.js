import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import loginImg from '../../images/20944201.jpg'
import './Register.css';



const Register = () => {

	const {error, signInUsingGoogle, handleEmailChange, handlePasswordChange,registerNewUser,handleNameChange } = useAuth();


	return (
		<>
			<div class="vh-100">
				<div class="container-fluid h-custom">
					<div class="row d-flex justify-content-center align-items-center h-100">
						<div class="col-md-9 col-lg-6 col-xl-5">
						<img src={loginImg} class="img-fluid" alt="" />
						</div>
						<div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
							<form onSubmit={registerNewUser}>
								<div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
									<p class="lead fw-normal mb-0 me-3">Sign up with</p>
									{/* <button type="button" class="btn btn-primary btn-floating mx-1">
										<i class="fab fa-facebook-f"></i>
									</button> */}

									{/* <button type="button" class="btn btn-primary btn-floating mx-1">
										<i class="fab fa-twitter"></i>
									</button> */}

									<button onClick={signInUsingGoogle} type="button" class="btn btn-primary btn-floating mx-1">
										<i class="fab fa-google"></i>
									</button>
								</div>

								<div class="divider d-flex align-items-center my-4">
									<p class="text-center fw-bold mx-3 mb-0">Or</p>
								</div>

								{/* <!-- Email input --> */}

								<div class="form-outline mb-4">
									<label class="form-label" for="form3Example3">Name</label>
									<input onBlur={handleNameChange} type="text" id="form3Example3" class="form-control form-control-lg"
										placeholder="Abdur Rahim" />
								
								</div>


								<div class="form-outline mb-4">
									<label class="form-label" for="form3Example3">Email address</label>
									<input onBlur={handleEmailChange} type="email" id="form3Example3" class="form-control form-control-lg"
										placeholder="Enter a valid email address" required />

								</div>

								{/* <!-- Password input --> */}
								<div class="form-outline mb-3">
									<label class="form-label" for="form3Example4">Password</label>
									<input onBlur={handlePasswordChange} type="password" id="form3Example4" class="form-control form-control-lg"
										placeholder="Enter password" required />
									
								</div>

								{/* <div class="d-flex justify-content-between align-items-center"> */}
									{/* <!-- Checkbox --> */}
									{/* <div class="form-check mb-0">
										<input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
										<label class="form-check-label" for="form2Example3">
											Remember me
										</label>
									</div> */}
									{/* <a href="#!" class="text-body">Forgot password?</a> */}
								{/* </div> */}

								<div class="text-center text-lg-start mt-4 pt-2">
									{/* <button onClick={registerNewUser} type="button" class="btn btn-primary btn-lg"
										
										>Sign Up</button> */}

									<input type="submit" value="Submit" class="btn btn-primary btn-lg" />
									<p class="small fw-bold mt-2 pt-1 mb-0">Already have an account? <Link to="/login"
										class="link-danger">  Login</Link></p>
								</div>

								<div class="divider d-flex align-items-center my-4">
									<p class="text-center fw-bold mx-3 mb-0 text-muted">{error}</p>
								</div>

							</form>
						</div>
					</div>
				</div>
				{/* <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary"> */}
					{/* <!-- Copyright --> */}
					{/* <div class="text-white mb-3 mb-md-0">
						Copyright © 2020. All rights reserved.
					</div> */}
				{/* <!-- Copyright --> */}

					{/* <!-- Right --> */}
					{/* <div>
						<a href="#!" class="text-white me-4">
							<i class="fab fa-facebook-f"></i>
						</a>
						<a href="#!" class="text-white me-4">
							<i class="fab fa-twitter"></i>
						</a>
						<a href="#!" class="text-white me-4">
							<i class="fab fa-google"></i>
						</a>
						<a href="#!" class="text-white">
							<i class="fab fa-linkedin-in"></i>
						</a>
					</div> */}
					{/* <!-- Right --> */}
				{/* </div> */}
			</div>


		</>
	);
};

export default Register;