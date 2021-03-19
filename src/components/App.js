import '../App.css'
import { useEffect } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from './history'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import { useStateValue } from './StateProvider'
import { auth } from './fireBase'

function App() {
	const [{ user }, dispatch] = useStateValue()

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((AuthUser) => {
			if (AuthUser) {
				// user is logged in
				dispatch({
					type: 'SET_USER',
					user: AuthUser,
				})
			} else {
				dispatch({
					type: 'SET_USER',
					user: null,
				})
			}
		})
		return () => {
			unsubscribe()
		}
	}, [])

	return (
		<Router history={history}>
			<Switch>
				<Route path='/' exact>
					<Header />
					<Home />
				</Route>
				<Route path='/checkout' exact>
					<Header />
					<Checkout />
				</Route>
				<Route path='/login' exact component={Login} />
			</Switch>
		</Router>
	)
}

export default App
