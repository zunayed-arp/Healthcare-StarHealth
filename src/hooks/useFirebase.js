import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {

	const [name, setName] = useState('');
	const [user, setUser] = useState({});
	const [error, setError] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading,setLoading] = useState(true);
	const [isLogin, setIsLogin] = useState(false);

	const auth = getAuth();

	const googleProvider = new GoogleAuthProvider();


	const signInUsingGoogle = () => {
		signInWithPopup(auth, googleProvider)
			.then(result => {
				console.log(result.user)
				setUser(result.user);
				setError('');
			}).catch(error => {
				console.log(error.message);
				setError(error.message);
			})
	}



	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				console.log('inside state change')
				setUser(user);
			}
		})
	}, [])

	

	const handleNameChange = (e) => {
		setName(e.target.value)
	}


	const handleEmailChange = (e) => {
		console.log(e.target.value);
		setEmail(e.target.value);

	}

	const handlePasswordChange = (e) => {
		console.log(e.target.value);
		setPassword(e.target.value);
	}


	// handle registration


	// const handleRegistration = (e) =>{
	// 	e.preventDefault();
	// 	if(password.length < 6){
	// 		setError("Password should be at least 6 characters (auth/weak-password")
	// 		return;
	// 	}
	// 	// if(isLogin){
	// 	// 	processLogin(email, password);
	// 	// }
	// 	// else{
	// 	// 	registerNewUser(email,password);
	// 	// }
	// 	// isLogin ? processLogin(email,password): registerNewUser(email, password);


	// }






	const registerNewUser = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, password)
			.then(result => {
				console.log(result.user);
				setUser(result.user);
				setUserName();
				setError('');
				setIsLogin(true)
			}).catch(error => {
				console.log(error.message);
				setError(error.message);
			})

	}



	const setUserName = () => {
		updateProfile(auth.currentUser, {
			displayName: name
		}).then(() => {
			console.log('Profile updated');

		}).catch(error => {
			setError(error.message)
		})
	}


	const processLogin = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then(result => {
				console.log(result.user);
				console.log('login succesfull')
				setUser(result.user);
				setError('');
			}).catch(error => {
				console.log(error.message);
				setError(error.message);
			})
	}

	//handle signOut
	const handleSignOut = () => {
		signOut(auth)
			.then(result => {
				setUser({});
				setError('');
			}).catch(error=>{
				console.log(error.message);
				setError(error.message)
			})
	}



	//check box handleing

	const toggleLogin = (e) => {
		setIsLogin(e.target.checked);

		console.log(e.target.checked);
	}




	return {
		user,
		error,
		signInUsingGoogle,
		handleEmailChange,
		handlePasswordChange,
		registerNewUser,
		handleSignOut,
		toggleLogin,
		handleNameChange,
		processLogin

	}



}

export default useFirebase;