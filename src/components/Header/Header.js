import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
	const { user, handleSignOut } = useAuth();

	const activeStyle = {
		fontWeight: "bold",
		color: "red"
	};

	return (
		<>
			<Navbar sticky="top" bg="light" expand="lg">
				<Container>
					<Navbar.Brand  as={NavLink} to="/">Star Health Services</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link activeStyle={activeStyle} as={NavLink} to="/home">Home</Nav.Link>
							<Nav.Link activeStyle={activeStyle} as={NavLink} to="/doctors">Doctors</Nav.Link>
							<Nav.Link activeStyle={activeStyle} as={NavLink} to="/blog">Blog</Nav.Link>
							<Nav.Link activeStyle={activeStyle} as={NavLink} to="/covid19">covid19</Nav.Link>
							<Nav.Link activeStyle={activeStyle} as={NavLink} to="/gallery">gallery</Nav.Link>
							<Nav.Link activeStyle={activeStyle} as={NavLink} to="/faq">FAQ</Nav.Link>
							<Nav.Link activeStyle={activeStyle} as={NavLink} to="/report">Online Reporting</Nav.Link>
							<Nav.Link activeStyle={activeStyle} as={NavLink} to="/account">Account</Nav.Link>
							

							{!user.email && <Nav.Link activeStyle={activeStyle} as={NavLink} to="/login">Login</Nav.Link>}
					{user.email && <button onClick={handleSignOut} className="btn btn-secondary">LogOut</button>}

						</Nav>
						{user.email && <Navbar.Text>
							Signed in as: {user.displayName}
						</Navbar.Text>}
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;