import React from "react";
import me from "../../assets/images/me.png";

const About = () => {
	return (
		<div className='container py-5'>
			<div className='row align-items-center'>
				<div className='col-md-6'>
					<img src={me} alt='' />
				</div>
				<div className='col-md-6'>
					<h4>Hi There!</h4>
					<h2 className='fw-bold'>I'm Mohammad Tasib</h2>
					<p>
						I have professional experience with programming languages and tools
						such as React, HTML, CSS, Sass, Bootstrap, javascript, ES6, and
						Firebase Auth to contribute features by writing and maintaining
						code.I like to work hard. My only wish is to become a professional
						web developer. And I will put a smile on the face of my parents. I
						will give my best effort to achieve the best result. All tasks I try
						to carry out on time and in full.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
