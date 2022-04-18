import React from "react";
import image1 from "../../assets/images/Authentication_vs_Authorization.png";
import image2 from "../../assets/images/firebase.png";
import image3 from "../../assets/images/firebase11.jpg";

const Blog = () => {
	return (
		<div className='container py-5'>
			<div className='card mb-3'>
				<img src={image1} className='card-img-top' alt='...' />
				<div className='card-body'>
					<h5 className='card-title'>
						Difference between <b>authorization</b> and <b>authentication</b>
					</h5>
					<div className='card-text'>
						<h5>Authorization</h5>
						<ul>
							<li>
								Authorization determines what resources a user can access.
							</li>
							<li>Authorization always takes place after authentication.</li>
							<li>Determines what users can and cannot access</li>
						</ul>
					</div>
					<div className='card-text'>
						<h5>Authentication</h5>
						<ul>
							<li>Authentication verifies who the user is.</li>
							<li>
								Authentication is the first step of a good identity and access
								management process.
							</li>
							<li>Determines whether users are who they claim to be</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='card mb-3'>
				<img src={image2} className='card-img-top' alt='...' />
				<div className='card-body'>
					<div className='card-text'>
						<h5 className='card-title'>Why are you using firebase?</h5>
						Google Firebase offers many features that pitch it as a backend
						development tool for web and mobile apps. Firebase features include
						authentication, realtime databases, firestore, hosting, cloud
						functionality, and more.
					</div>
					<div className='card-text'>
						<h5 className='card-title'>
							What other options do you have to implement authentication?
						</h5>
						HTTP Authentication Schemes
						<ul>
							<li>Bearer</li>
							<li>Digest</li>
							<li>OAuth</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='card mb-3'>
				<img src={image3} className='card-img-top' alt='...' />
				<div className='card-body'>
					<h4 className='card-title'>
						What other services does firebase provide other than authentication
					</h4>
					<div className='card-text'>
						<h5>Firebase provides us with more services</h5>
						<ul>
							<li>Realtime Database</li>
							<li>Cloud Messaging</li>
							<li>Hosting</li>
							<li>Storage</li>
							<li>Remote Config</li>
							<li>Test Lab</li>
							<li>Crash Reporting</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
