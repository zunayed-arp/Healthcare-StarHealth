import React from 'react';
import { Card, Col, Container,Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useBlog from '../../hooks/useBlog';

const BlogHome = () => {
	const {blogs} = useBlog();
	 console.log(blogs)
	return (
		<Container >
			<h1 className="mx-auto m-3 border">Blogs</h1>

			<Row>
			
				{
					blogs.map(blog=><BlogsAtHome
						key={blog.id}
						blog={blog}
					>
					</BlogsAtHome>)
				}
		
			</Row>

		</Container>
	);
};





function BlogsAtHome({blog}) {

	const {img,title,description} =blog;

	return (
		<Col xs={6} sm={4} md={3}>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src={img} />
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>
						{description}
					</Card.Text>
					<Link to="/blog">
						<Button variant="primary">Read More</Button>
					</Link>
				</Card.Body>
			</Card>
		</Col>


	);

}

export default BlogHome;