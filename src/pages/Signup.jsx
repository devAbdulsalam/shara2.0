import React, { useState } from 'react';
import Logo from '../assets/logo.png';
// import signinImage from "../assets/Simage.png";
import { Link, useNavigate } from 'react-router-dom';
import { useSignup } from '../hooks/useSignup';
// import axios from "axios";

const Signup = () => {
	const navigate = useNavigate();
	const { signup, error, isLoading } = useSignup();
	// // toggle login and signUp
	const [showSignUp, setShowSignUp] = useState(true);
	const [showLogin, setShowLogin] = useState(false);

	// // signUp
	const [phone, setPhoneNumber] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const user = { name, phone, password };
		await signup(user);
	};

	const handleSignUp = () => {
		setShowSignUp(true);
		setShowLogin(false);
		navigate('/signup');
	};
	const handleLogin = () => {
		setShowSignUp(false);
		setShowLogin(true);
		navigate('/login');
	};

	return (
		<section className="font-serif min-h-screen bg-green-50 flex place-items-center">
			<div className="p-5 py-8 w-full md:flex place-content-center">
				<div className="hidden w-full">
					{/* <div className="hidden md:flex  items-center justify-center space-x-5 w-full"> */}
					<button
						className={`font-semibold text-3xl rounded-full p-3 shadow-xl bg-gray-100 justify-center flex flex-col  ${
							showSignUp
								? 'border-b-4 border-green-600 text-green-600'
								: 'text-green-700'
						}`}
						onClick={handleSignUp}
					>
						<ion-icon name="person-add-outline"></ion-icon>
					</button>
					<button
						className={`font-semibold text-3xl rounded-full p-3 shadow-xl bg-gray-100 justify-center flex flex-col ${
							showLogin
								? 'border-b-4  border-green-600 text-green-600'
								: 'text-green-700'
						}`}
						onClick={handleLogin}
					>
						<ion-icon name="log-in-outline"></ion-icon>
					</button>
				</div>
				<div className="mx-auto p-4 md:p-0 w-full md:min-w-[700px] md:max-w-[800px] mt-10 md:mt-20 shadow-xl rounded-lg md:rounded-xl md:flex bg-white md:bg-green-500">
					<div className="hidden md:flex items-center justify-center flex-col w-5/12">
						<div className="flex items-center justify-center w-full">
							<img className="w-32 mt-8" src={Logo} alt="" />
						</div>
						<h1 className="text-white text-2xl font-bold my-4">WELCOME BACK</h1>
						<button
							className={`font-semibold text-3xl  rounded-md mt-4 p-3 shadow-xl bg-gray-50 justify-center flex  ${
								showSignUp
									? 'border-b-4 border-green-600 text-green-600'
									: 'text-green-700'
							}`}
							onClick={handleSignUp}
						>
							<ion-icon name="person-add-outline"></ion-icon>
							<span className="text-green-600 text-xl px-2 font-semibold">
								Log in
							</span>
						</button>
					</div>
					<div className="md:w-7/12 mb-0 mx-0 flex flex-col py-4 md:py-10 md:px-20 bg-white">
						<h2 className="text-green-500 text-2xl text-center font-bold">
							Sign up
						</h2>
						<form className="w-full flex flex-col py-4" onSubmit={handleSubmit}>
							<div className="mt-2">
								<label htmlFor="name" className="text-lg font-semibold">
									Name:
								</label>
								<input
									onChange={(e) => setName(e.target.value)}
									className="px-3 my-2 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
									type="text"
									value={name}
									placeholder="Abdullahi Bamidele Chuckwuma"
									id="name"
									autoComplete="name"
								/>
							</div>
							<div className="mt-2">
								<label htmlFor="phone" className="text-lg font-semibold">
									Phone Number:
								</label>
								<input
									value={phone}
									onChange={(e) => setPhoneNumber(e.target.value)}
									className="px-3 my-2 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
									type="phone"
									id="phone"
									placeholder="Phone Number"
									autoComplete="phone"
								/>
							</div>
							<div className="mt-2">
								<label htmlFor="password" className="text-lg font-semibold">
									Password:
								</label>
								<input
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className="px-3 my-2 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-2 border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
									type="password"
									id="password"
									placeholder="Password"
									autoComplete="current-password"
								/>
							</div>

							<button
								type="submit"
								className="bg-[#228e01] w-full text-white py-3 my-6 rounded font-bold"
								disabled={isLoading}
							>
								Sign in
							</button>

							{error && (
								<div className="error duration-500 p-2 bg-red-300 text-red-800 text-center text-lg border-red-700 border-2 rounded-md">
									{error}
								</div>
							)}

							<div className="flex justify-between sm:text-sm text-lg my-3 items-center text-gray-600">
								<label htmlFor="rememberMe">
									<input className="mr-2 text-lg" type="checkbox" />
									Remember me
								</label>
								<Link
									to={'/forgetPassword'}
									className="text-lg text-green-700 hover:text-green-600"
								>
									Forget Password
								</Link>
							</div>
							<p className="py- text-gray-600">
								Already on Shara?{' '}
								<Link to={'/'} className="text-green-700">
									Login
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Signup;
