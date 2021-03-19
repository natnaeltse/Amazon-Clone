import './Home.css'
import React from 'react'
import Product from './Product'

function Home() {
	return (
		<div className='home'>
			<img
				className='home__image'
				src='https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/YTFhNjA1Y2It/YTFhNjA1Y2It-ZGY4MjRlYzYt-w1500._CB659203896_.jpg'
				alt=''
			/>

			<div className='home__row'>
				<Product
					id='123'
					title='The lean Startup: How constant enovation...'
					price={120.95}
					image='https://images-na.ssl-images-amazon.com/images/I/61Y8-TgZGEL._AC_SL1000_.jpg'
					rating={5}
				/>
				<Product
					id='1234'
					title='The lean Startup: How constant enovation...'
					price={11.99}
					image='https://m.media-amazon.com/images/I/51NA6SBuY2L.jpg'
					rating={4}
				/>
			</div>
			<div className='home__row'>
				<Product
					id='12345'
					title='The lean Startup: How constant enovation...'
					price={1500.6}
					image='https://images-na.ssl-images-amazon.com/images/I/71MlcO29QOL._AC_SL1500_.jpg'
					rating={3}
				/>
				<Product
					id='1236'
					title='The lean Startup: How constant enovation...'
					price={235.0}
					image='https://images-na.ssl-images-amazon.com/images/I/61NVZe%2BYSyL._AC_SL1054_.jpg'
					rating={4}
				/>
				<Product
					id='1237'
					title='The lean Startup: How constant enovation...'
					price={23.8}
					image='https://m.media-amazon.com/images/I/5138YhQZILL._AC_UY327_FMwebp_QL65_.jpg'
					rating={5}
				/>
			</div>
			<div className='home__row'>
				<Product
					id='1238'
					title='The lean Startup: How constant enovation...'
					price={133.4}
					image='https://images-na.ssl-images-amazon.com/images/I/71YzHUJhMwL._AC_SL1498_.jpg'
					rating={4}
				/>
			</div>
		</div>
	)
}

export default Home
