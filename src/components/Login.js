import './login.css'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { login, register } from './fireBase'

function Login() {
	const history = useHistory()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<div className='login'>
			<Link to='/'>
				<img
					className='login__logo'
					src='http://pngimg.com/uploads/amazon/amazon_PNG12.png'
					alt=''
				/>
			</Link>
			<div className='login__container'>
				<div className='login__formDiv'>
					<h1>Sign in</h1>
					<form onSubmit={(e) => e.preventDefault()}>
						<h5>Email</h5>
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type='email'
						/>
						<h5>Password</h5>
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type='password'
						/>
						<button
							onClick={() => login(email, password, history)}
							type='submit'>
							Sign In
						</button>
					</form>
					<p>
						By signing-in you agree to Amazon's Conditions of Use & Sale. Please
						see our Privacy Notice, our Cookies Notice and our Interest-Based
						Ads Notice.
					</p>
				</div>

				<div className='login__newToAmazon'>
					<hr />
					<p>New to Amazon?</p>
					<hr />
				</div>

				{/* <Link to=''> */}
				<button onClick={() => register(email, password, history)}>
					Create your Amazon account
				</button>
				{/* </Link> */}
			</div>
		</div>
	)
}

export default Login
