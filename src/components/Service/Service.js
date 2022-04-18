import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
	const navigate = useNavigate();
	const { id, name, description, image, price } = service;

	// navigate checkout page
	const handleNavigateCheckout = id => {
		navigate(`/checkout/${id}`);
	};

	return (
		<div className='col'>
			<div className='card h-100'>
				<img src={image} className='card-img-top' alt='...' />
				<div className='card-body'>
					<h5 className='card-title'>{name}</h5>
					<p className='card-text'>{description.slice(0, 100)}</p>
					<div className='row align-items-center'>
						<div className='col-md-6'>
							<h4 className='card-text'>${price}</h4>
						</div>
						<div className='col-md-6 text-end'>
							<button
								onClick={() => handleNavigateCheckout(id)}
								className='btn btn-dark fw-bold'>
								ADD
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;
