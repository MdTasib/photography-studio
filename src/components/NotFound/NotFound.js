import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../assets/images/404.gif";

const NotFound = () => {
	return (
		<div className='container text-center'>
			<img src={notFound} alt='' />
			<br />
			<Link to='/' className='btn btn-outline-dark mb-4'>
				GO TO HOME
			</Link>
		</div>
	);
};

export default NotFound;
