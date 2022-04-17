import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icon/cemera.png";

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-black'>
			<div className='container'>
				<Link className='navbar-brand d-flex align-items-center' to='/'>
					<img src={logo} height='40' alt='' />
					<span className='pt-2 ps-4'>PHOTOGRAPHY STUDIO</span>
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav ms-auto'>
						<li className='nav-item'>
							<Link className='nav-link active' aria-current='page' to='/home'>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/about'>
								About
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/blog'>
								Blog
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/singin'>
								Singin
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/singup'>
								Singup
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
