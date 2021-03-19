import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyC3PL2bK44GHrRwrfz3iMcA_9gIz776rJ4',
	authDomain: 'clones-28fe7.firebaseapp.com',
	projectId: 'clones-28fe7',
	storageBucket: 'clones-28fe7.appspot.com',
	messagingSenderId: '643298030634',
	appId: '1:643298030634:web:9f0349b80b770e2b607f53',
	measurementId: 'G-NVEV0GLDNZ',
})

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }

export const login = (email, password, history) => {
	auth
		.signInWithEmailAndPassword(email, password)
		.then((loggedIn) => {
			// user is logged in and redirected to homepage
			history.push('/')
		})
		.catch((err) => {
			alert(err.message)
		})
}

export const register = (email, password, history) => {
	auth
		.createUserWithEmailAndPassword(email, password)
		.then((newUser) => {
			// new user created and logged in and redirect to home page
			history.push('/')
		})
		.catch((err) => {
			alert(err.message)
		})
}
