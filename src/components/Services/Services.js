import React from "react";
import useServices from "../../hooks/useService";
import Service from "../Service/Service";

const Services = () => {
	const [services, setServices] = useServices([]);

	return (
		<div className='container py-4'>
			<div className='text-center'>
				<h2>MY SERVICES</h2>
			</div>
			<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center g-4'>
				{services.map(service => (
					<Service key={service.id} service={service} />
				))}
			</div>
		</div>
	);
};

export default Services;
