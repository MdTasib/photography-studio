import React, { useRef } from "react";
import "./Singup.css";
import logo from "../../assets/icon/cemera.png";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../../firebase.init";
import toast from "react-hot-toast";

const Singup = () => {
	const nameRef = useRef("");
	const emailRef = useRef("");
	const passwordRef = useRef("");
	const confirmPasswordRef = useRef("");

	const handleSubmit = event => {
		event.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		const confirmPassword = confirmPasswordRef.current.value;

		if (password !== confirmPassword) {
			toast.error("Password must be same");
			return;
		} else {
			createUserWithEmailAndPassword(auth, email, password)
				.then(result => {
					const user = result.user;
					updateUserProfile();
					console.log(user);
					toast.success("User created successfully");
				})
				.catch(error => {
					let errorMessage = error.message;
					toast.error(errorMessage.split(":")[1]);
				});
		}
	};

	const updateUserProfile = () => {
		const name = nameRef.current.value;
		updateProfile(auth.currentUser, { displayName: name })
			.then(() => {})
			.catch(error => console.log(error.message));
	};

	return (
		<div className='singup p-5'>
			<div className='container w-50'>
				<div className='text-center pb-3'>
					<img src={logo} className='img-fluid' width='100' alt='...' />
				</div>
				<form onSubmit={handleSubmit} className='px-5'>
					<input
						ref={nameRef}
						type='text'
						className='form-control my-3'
						placeholder='Name'
						required
					/>
					<input
						ref={emailRef}
						type='email'
						className='form-control my-3'
						placeholder='Email'
						required
					/>
					<input
						ref={passwordRef}
						type='password'
						className='form-control my-3'
						placeholder='Password'
						required
					/>
					<input
						ref={confirmPasswordRef}
						type='password'
						className='form-control my-3'
						placeholder='Confirm Password'
						required
					/>
					<input
						type='submit'
						className='form-control btn btn-dark'
						value='Sing Up'
					/>
				</form>
				<div className='text-center pt-3'>
					<Link to='/login' className='text-decoration-none text-dark'>
						<small>
							Already have an account ?
							<span className='fw-bold'> Please Login</span>
						</small>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Singup;
