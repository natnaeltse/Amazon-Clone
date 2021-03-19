import './Header.css'
import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider'
import { auth } from './fireBase'

function Header() {
	const [{ basket, user }] = useStateValue()

	const signout = () => {
		if (user) {
			auth.signOut()
		}
	}

	return (
		<nav className='header'>
			{/* Logo */}
			<Link to='/'>
				<img
					className='header__logo'
					src='http://pngimg.com/uploads/amazon/amazon_PNG25.png'
					alt='Amazon logo'
				/>
			</Link>
			{/* Search bar */}
			<div className='header__search'>
				<input type='text' className='header__searchInput' />
				<SearchIcon className='header__searchIcon' />
			</div>
			{/* 3 links and the basket */}
			<div className='header__nav'>
				<Link to={!user && '/login'} className='header__links'>
					<div onClick={signout} className='header__option'>
						<span>Hello, {user?.email}</span>
						<span>{!user ? 'Sign in' : 'Sign Out'}</span>
					</div>
				</Link>
				<Link to='/login' className='header__links'>
					<div className='header__option'>
						<span>Returns</span>
						<span>& Orders</span>
					</div>
				</Link>
				<Link to='/login' className='header__links'>
					<div className='header__option'>
						<span>Your</span>
						<span>Prime</span>
					</div>
				</Link>
				<Link to='/checkout' className='header__links'>
					<div className='header__optionBasket'>
						<ShoppingBasketIcon />
						<span>{basket?.length}</span>
					</div>
				</Link>
			</div>
		</nav>
	)
}

export default Header
