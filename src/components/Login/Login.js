import React from 'react';
import loginImg from '../../images/20944201.jpg';
import { Link,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {


	const {error,processLogin,handleEmailChange,signInUsingGoogle,handlePasswordChange} = useAuth();
	const history = useHistory()

	return (
		<>
			<section class="vh-100 pb-5">
				<div class="container py-5 h-100">
					<div class="row d-flex align-items-center justify-content-center h-100">
						<div class="col-md-8 col-lg-7 col-xl-6">
						<img src={loginImg} class="img-fluid" alt="" />
						</div>
						<div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
							<form>
								{/* <!-- Email input --> */}

							<h3 className="text-center">Please Login</h3>
								<div class="form-outline mb-4">
									<input onBlur={handleEmailChange} type="email" id="form1Example13" class="form-control form-control-lg" required />
									<label class="form-label" for="form1Example13">Email address</label>
								</div>

								{/* <!-- Password input --> */}
								<div class="form-outline mb-4">
									<input onBlur={handlePasswordChange} type="password" id="form1Example23" class="form-control form-control-lg" required/>
									<label class="form-label" for="form1Example23">Password</label>
								</div>

								<div class="d-flex justify-content-around align-items-center mb-4">
									{/* <!-- Checkbox --> */}
									<div class="form-check">
										<input
											class="form-check-input"
											type="checkbox"
											value=""
											id="form1Example3"
										
										/>
										<label class="form-check-label" for="form1Example3"> Remember me </label>
									</div>
									<a href="#!">Forgot password?</a>
								</div>

								{/* <!-- Submit button --> */}
								<button onClick={processLogin} type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>

								<div class="divider d-flex align-items-center my-4">
									<p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
								</div>

								{/* <Link class="btn btn-primary btn-lg btn-block" style={{backgroundColor: '#3b5998'} to="/facebook" role="button">
									<i class="fab fa-facebook-f me-2"></i>Continue with Facebook
								</Link> */}
								<Link onClick={signInUsingGoogle} class="btn btn-primary btn-lg btn-block" style={{backgroundColor: '#55acee'}} to="/login"  role="button">
									<i class="fab fa-google me-2"></i>Continue with Google</Link>

								{/* <button  class="btn btn-primary btn-lg btn-block"><i class="fab fa-google me-2"></i>Continue with Google</button> */}
								<div class="divider d-flex align-items-center my-4">
									<p class="text-center fw-bold mx-3 mb-0 text-muted">{error}</p>
								</div>
							
			

								<div class="text-center text-lg-start mt-4 pt-2">
									<p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/register"
										class="link-danger">Register</Link></p>
								</div>





							</form>
						</div>	
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;