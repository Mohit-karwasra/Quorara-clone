import React from "react";
import "../../styles/login.css";
import { useState } from "react";
import { auth, googleProvider } from "../../config/firebase";
import logo from "../../assets/kindpng_4620573.png";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
} from "firebase/auth";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = () => {
		signInWithPopup(auth, googleProvider).catch((e) => {
			alert(e.message);
		});
	};

	const handleSignIn = (e) => {
		e.preventDefault();

		signInWithEmailAndPassword(auth, email, password)
			.then((auth) => {
				console.log(auth);
			})
			.then(() => {
				setEmail("");
				setPassword("");
			})
			.catch((e) => alert(e.message));
	};

	const registerSignIn = (e) => {
		e.preventDefault();

		createUserWithEmailAndPassword(auth, email, password)
			.then((auth) => {
				if (auth) {
					console.log(auth);
				}
			})
			.then(() => {
				setEmail("");
				setPassword("");
			})
			.catch((e) => alert(e.message));
	};
	return (
		<div className="login">
			<div className="login-container">
				<div className="login-logo">
					<img src={logo} alt="logo" />
				</div>
				<div className="login__desc">
					<p>A Place to Share knowledge and better understand the world</p>
				</div>
				<div className="login__auth">
					<div className="login__authOptions">
						<p style={{ color: "gray", fontSize: "12px" }}>
							By continuing you indicate that you agree to Quora’s{" "}
							<span style={{ color: "blue" }}>Terms of Service</span> and
							<span style={{ color: "blue" }}> Privacy Policy</span>.
						</p>
						<div className="login__authOption">
							<img
								className="login__googleAuth"
								src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
								alt=""
							/>
							<p onClick={signIn}>Continue With Google</p>
						</div>
						<div className="login__authOption">
							<img
								className="login__googleAuth"
								src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
								alt=""
							/>
							<span>Continue With Facebook</span>
						</div>
						<div className="login__authDesc">
							<p>
								<span style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}>
									Sign Up With Email
								</span>
							</p>
						</div>
					</div>
					<div className="login__emailPass">
						<div className="login__label">
							<h4>Login</h4>
						</div>
						<div className="login__inputFields">
							<div className="login__inputField">
								<input
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									type="text"
									placeholder="Email"
								/>
							</div>
							<div className="login__inputField">
								<input
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									type="password"
									placeholder="Password"
								/>
							</div>
						</div>
						<div className="register__forgButt">
							<small>Forgot Password?</small>
							<button onClick={registerSignIn}>Register</button>
						</div>
						<button onClick={handleSignIn}>Login</button>
					</div>
				</div>
				<div className="login__lang">
					<p>हिन्दी</p>
				</div>
				<div className="login__footer">
					<p>About</p>
					<p>Languages</p>
					<p>Careers</p>
					<p>Businesses</p>
					<p>Privacy</p>
					<p>Terms</p>
					<p>Contact</p>
					<p>&copy; Quora Fake Inc. 2021</p>
				</div>
			</div>
		</div>
	);
};
