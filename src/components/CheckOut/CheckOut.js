import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useServices from "../../hooks/useService";

const CheckOut = () => {
	const { id } = useParams();
	const [services, setServices] = useServices();
	const [service, setService] = useState({});

	useEffect(() => {
		const findService = services.find(service => service.id == id);
		setService(findService);
	}, [id, services]);
	console.log(service);

	return (
		<div className='py-4 container'>
			<h2 className='text-center py-3'>Check Out</h2>
			<div className='row'>
				<div className='col-md-6'>
					<form className='px-5'>
						<input
							type='text'
							className='form-control my-3'
							placeholder='Name'
						/>
						<input
							type='email'
							className='form-control my-3'
							placeholder='Email'
						/>
						<input
							type='phone'
							className='form-control my-3'
							placeholder='Phone'
						/>
						<input
							type='password'
							className='form-control my-3'
							placeholder='Address'
						/>
						<input
							type='submit'
							className='form-control btn btn-dark'
							value='Checkout'
						/>
					</form>
				</div>
				<div className='col-md-6 p-2'>
					<h4>Order Summary</h4>
					<img src={service?.image} className='rounded' width='250' alt='' />
					<ul className='list-unstyled'>
						<li>
							<b>Name : </b>
							{service?.name}
						</li>
						<li>
							<b>Price : </b>${service?.price}
						</li>
					</ul>
					<button className='btn btn-dark'>Continue</button>
				</div>
			</div>
		</div>
	);
};

export default CheckOut;
