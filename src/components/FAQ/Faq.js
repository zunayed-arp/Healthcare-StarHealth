import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Faq = () => {
	return (
<Container>
			<Accordion defaultActiveKey="0">
				<Accordion.Item eventKey="0">
					<Accordion.Header>WHAT IS A FAMILY DOCTOR?</Accordion.Header>
					<Accordion.Body>
						Family doctors are specialized in comprehensive healthcare for you and your family, starting from birth to the late stages of life. In most cases, family doctors can address 80-90% of all your medical issues and are also capable of treating chronic illnesses such as diabetes and heart disease. They spend time getting to know you and your medical history and provide continuity of care even in instances when they may have to refer you to a specialist. They also help to coordinate care with specialists so that you can trust you are in the best hands.
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="1">
					<Accordion.Header>WHAT IS A PATIENT APP?</Accordion.Header>
					<Accordion.Body>
						A patient app is a secure online website, also available as a downloadable app for your phone, that gives you 24-hour access to your personal health information from anywhere. With Praava’s patient app, you can access medical records, book appointments, review prescriptions, diagnostic test results, along with many other features to make healthcare more convenient for you.
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="2">
					<Accordion.Header>WHAT IS A HEALTH CHECK?</Accordion.Header>
					<Accordion.Body>
						A Health Check is a thorough check-up of your health, recommended once a year. Health checks can identify health problems you may not know you have, such as the development of chronic conditions or if you are at risk of developing a chronic condition. They prevent illnesses and ensure that you can get early treatment or cure. By being aware of your health and getting the right treatment at the right time, you can avoid the burden of additional medical costs.
					</Accordion.Body>
				</Accordion.Item>

				<Accordion.Item eventKey="3">
					<Accordion.Header>WHAT IS AN ANNUAL MEMBERSHIP PLAN?</Accordion.Header>
					<Accordion.Body>
						Staying up to date on your health or dealing with chronic health conditions can be challenging. Our membership plans ensure you receive ongoing care throughout the year. Our plans include one annual health check, unlimited consultations with family doctors, and discounted rates on diagnostics and pharmaceutical products. Purchasing an affordable annual membership plan reduces your overall yearly healthcare cost.
					</Accordion.Body>
				</Accordion.Item>




			</Accordion>
</Container>
	);
};

export default Faq;