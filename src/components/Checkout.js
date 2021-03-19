import './checkout.css'
import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
	const [{ basket }, dispatch] = useStateValue()
	return (
		<div className='checkout'>
			<div className='checkout__container'>
				<div className='checkout_left'>
					<img
						className='checkout__ad'
						src='https://www.coolmilk.com/wp-content/uploads/250-newsletter-banner-advert.png'
						alt='advertisment from unsplash'
					/>

					{basket?.length === 0 ? (
						<div className='checkout__noItem'>
							<h2>Your shopping basket is empty</h2>
							<p>
								You have no items selected in your basket. To add items in to
								your basket click on "Add to cart" next to the item{' '}
							</p>
						</div>
					) : (
						<div className='checkout__items'>
							<h2 className='checkout__title'>Your shopping basket</h2>
							{basket.map((item) => {
								return <CheckoutProduct item={item} />
							})}
						</div>
					)}
				</div>

				{basket.length > 0 && (
					<div className='checkout__right'>
						<Subtotal />
					</div>
				)}
			</div>
		</div>
	)
}

export default Checkout
