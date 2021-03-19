import './product.css'
import React from 'react'
import { ADD_TO_BASKET } from './actions'
import { useStateValue } from './StateProvider'

function Product({ id, title, image, price, rating }) {
	const [{ basket }, dispatch] = useStateValue()

	function addToBasket() {
		dispatch({
			type: ADD_TO_BASKET,
			item: {
				id,
				title,
				price,
				image,
				rating,
			},
		})
	}

	return (
		<div className='product' key={id}>
			<div className='product__info'>
				<p>{title}</p>
				<p className='product__price'>
					<small>€</small>
					<strong>{price}</strong>
				</p>
				<div className='product__rating'>
					{Array(rating)
						.fill()
						.map((_) => (
							<p> ⭐ </p>
						))}
				</div>
			</div>
			<img src={image} alt='' className='product__image' />
			<button onClick={addToBasket} className='product__btn'>
				Add to cart
			</button>
		</div>
	)
}

export default Product
