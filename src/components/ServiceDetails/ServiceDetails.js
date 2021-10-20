import React, { useEffect, useState } from 'react';

import {useParams} from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import useSerVices from '../../hooks/useServices';



const ServiceDetails = () => {

	const {serviceId} = useParams();

const {services} = useServices();

	// const [detail,setDetail] = useState([])

	// useEffect(()=>{
	// 	fetch('/services.json')
	// 	.then(res=>res.json())
	// 	.then(data=>console.log(data))
	// },[])


	// console.log(detail)
// console.log(services)

console.log(serviceId)


const detail = services.find(service=>service.id==serviceId)

console.log(detail)

	return (
		<div>

			<div className="container my-5">
				<div className="row d-flex align-items-center">
					<div className="col-lg-6 col-md-6 col-sm-12">
						<h2>{detail?.name}</h2>
						<p>{detail?.description}</p>
						<h2>{detail?.price} BDT</h2>
						<button className="btn btn-primary btn-md">Add to Cart <i className="fas fa-cart-plus"></i></button>
						<Link to="/">
							<button className="btn btn-primary btn-md ms-4">Back</button>
						</Link>
						
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12">
						<img width="70%" src={detail?.img} alt="" />
					</div>
				</div>
			</div>

		</div>
	);
};

export default ServiceDetails;