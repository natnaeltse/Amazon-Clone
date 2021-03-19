import './checkoutProduct.css'
import React from 'react'
import { useStateValue } from './StateProvider'
import { REMOVE_FROM_BASKET } from './actions'

function CheckoutProduct({ item: { id, title, image, price, rating } }) {
	const [{ basket }, dispatch] = useStateValue()
	const removeFromBasket = (id) => {
		dispatch({
			type: REMOVE_FROM_BASKET,
			id: id,
		})
	}

	return (
		<div className='checkoutProduct' key={id}>
			<img className='checkoutProduct__image' src={image} alt='' />
			<div className='checkoutProduct__info'>
				<p className='checkoutProduct__title'>{title}</p>

				<p className='checkoutProduct__price'>
					<small>€</small>
					<strong>{price}</strong>
				</p>
				<div className='checkoutProduct__rating'>
					{Array(rating)
						.fill()
						.map((_) => (
							<p> ⭐ </p>
						))}
				</div>
				<button
					onClick={() => removeFromBasket(id)}
					className='checkoutProduct__btn'>
					Remove from cart
				</button>
			</div>
		</div>
	)
}

export default CheckoutProduct
