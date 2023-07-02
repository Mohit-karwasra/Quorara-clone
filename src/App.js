import React, { useEffect } from "react";
import "./App.css";
import { Main } from "./components/Main";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { Login } from "./components/auth/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../src/config/firebase";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		onAuthStateChanged(auth, (authUser) => {
			if (authUser) {
				dispatch(
					login({
						uid: authUser.uid,
						photo: authUser.photoURL,
						displayName: authUser.displayName,
						email: authUser.email,
					})
				);
			} else {
				dispatch(logout());
			}
		});
	}, [dispatch]);

	return <div className="App">{user ? <Main /> : <Login />}</div>;
}

export default App;
