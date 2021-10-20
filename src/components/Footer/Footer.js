import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
	return (
		<>

			{/* <!-- Footer --> */}
			<footer class="text-center text-lg-start bg-light text-muted .fixed-bottom" className="footer-js">
				{/* <!-- Section: Social media --> */}
				<section
					class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
				>
					{/* <!-- Left --> */}
					<div class="me-5 d-none d-lg-block">
						<span>Get connected with us on social networks:</span>
					</div>
					{/* <!-- Left --> */}

					{/* <!-- Right --> */}
					<div>
						<Link to="/" class="me-4 text-reset">
							<i class="fab fa-facebook-f"></i>
						</Link>
						<Link to="/" class="me-4 text-reset">
							<i class="fab fa-twitter"></i>
						</Link>
						<Link to="/" class="me-4 text-reset">
							<i class="fab fa-google"></i>
						</Link>
						<Link to="/" class="me-4 text-reset">
							<i class="fab fa-instagram"></i>
						</Link>
						<Link to="/" class="me-4 text-reset">
							<i class="fab fa-linkedin"></i>
						</Link>
						<Link to="/" class="me-4 text-reset">
							<i class="fab fa-github"></i>
						</Link>
					</div>
					{/* <!-- Right --> */}
				</section>
				{/* <!-- Section: Social media --> */}

				{/* <!-- Section: Links  --> */}
				<section class="">
					<div class="container text-center text-md-start mt-5">
						{/* <!-- Grid row --> */}
						<div class="row mt-3">
							{/* <!-- Grid column --> */}
							<div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
								{/* <!-- Content --> */}
								<h6 class="text-uppercase fw-bold mb-4">
									<i class="fas fa-stethoscope"></i> Star Health Services
								</h6>
								<p>
									Health care is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments in people.
								</p>
							</div>
							{/* <!-- Grid column --> */}

							{/* <!-- Grid column --> */}
							<div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
								{/* <!-- Links --> */}
								<h6 class="text-uppercase fw-bold mb-4">
									Our Services
								</h6>
								<p>
									<Link to="/" class="text-reset">Imaging</Link>
								</p>
								<p>
									<Link to="/" class="text-reset">Pathology</Link>
								</p>
								<p>
									<Link to="/" class="text-reset">Test and Service Charge</Link>
								</p>
								<p>
									<Link to="/" class="text-reset">Health Packages</Link>
								</p>
							</div>
							{/* <!-- Grid column --> */}

							{/* <!-- Grid column --> */}
							<div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
								{/* <!-- Links --> */}
								<h6 class="text-uppercase fw-bold mb-4">
									Useful links
								</h6>
								<p>
									<Link to="/" class="text-reset">Appointment</Link>
								</p>
								<p>
									<Link to="/" class="text-reset">Doctors</Link>
								</p>
								<p>
									<Link href="/" class="text-reset">Online Report</Link>
								</p>
								<p>
									<Link to="/" class="text-reset">Help</Link>
								</p>
							</div>
							{/* <!-- Grid column --> */}

							{/* <!-- Grid column --> */}
							<div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
								{/* <!-- Links --> */}
								<h6 class="text-uppercase fw-bold mb-4">
									Contact
								</h6>
								<p><i class="fas fa-home me-3"></i> Dhanmondi, Dhaka 10012, BD</p>
								<p>
									<i class="fas fa-envelope me-3"></i>
									info@starhealth.com
								</p>
								<p><i class="fas fa-phone me-3"></i> + 088 234 567 88</p>
								<p><i class="fas fa-print me-3"></i> + 088 234 567 89</p>
							</div>
							{/* <!-- Grid column --> */}
						</div>
						{/* <!-- Grid row --> */}
					</div>
				</section>
				{/* <!-- Section: Links  --> */}

				{/* <!-- Copyright --> */}
				<div class="text-center p-4">
					© Star Health Services 2021
					<Link class="text-reset fw-bold" to="https://medical-services-e2bc2.web.app/"> Star Health Services</Link>
				</div>
				{/* <!-- Copyright --> */}
			</footer>
			{/* <!-- Footer --> */}
		</>
	);
};

export default Footer;