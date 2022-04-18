import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserAuth } from "../../App";
import useServices from "../../hooks/useService";

const CheckOut = () => {
	const { id } = useParams();
	const [services, setServices] = useServices();
	const [service, setService] = useState({});
	const [loginUser, setLoginUser] = useContext(UserAuth);

	// finding user choose service
	useEffect(() => {
		const findService = services.find(service => service.id == id);
		setService(findService);
	}, [id, services]);

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
							value={loginUser.displayName}
							readOnly
						/>
						<input
							type='email'
							className='form-control my-3'
							placeholder='Email'
							value={loginUser.email}
							readOnly
						/>
						<input
							type='phone'
							className='form-control my-3'
							placeholder='Phone'
						/>
						<input
							type='test'
							className='form-control my-3'
							placeholder='Address'
						/>
						<input
							onClick={event => event.preventDefault()}
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
