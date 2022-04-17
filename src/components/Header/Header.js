import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<div className='header'>
			<div className='overlay'></div>
			<div className='container d-flex align-items-center justify-content-center h-100'>
				<div className='text-center text-white header-info'>
					<h5>HELLO, I AM A PROFESSIONAL</h5>
					<h1>PHOTOGRAPHER</h1>
					<small>
						Photography is the process of recording visual images by capturing
						light rays on a light-sensitive recording medium (e.g. film or
						digital CCD). It can be thought of as two pursuits: Technical: The
						science of setting up the camera and the recording medium to take
						images in a controlled way.
					</small>
					<br />
					<button className='btn btn-light mt-4 fw-bold'>SHOW MORE</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
