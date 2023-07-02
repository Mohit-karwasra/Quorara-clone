import React from "react";
import styles from "../styles/navbar.module.css";
import logo from "../assets/kindpng_4620573.png";
import home from "../assets/home_1946488.png";
import followers from "../assets/play_10111766.png";
import answer from "../assets/writing_5812594.png";
import spaces from "../assets/people.png";
import notification from "../assets/bell.png";
import search from "../assets/magnifying-glass.png";
import avatar from "../assets/man.png";
import language from "../assets/globe.png";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../config/firebase";

export function Navbar() {
	const user = useSelector(selectUser);
	return (
		<div className={styles["navbar"]}>
			<div className={styles["logo-img-container"]}>
				<img src={logo} alt="logo" className={styles["logo-img"]} />
			</div>
			<div className={styles["icons-container"]}>
				<div className={styles["icon"]}>
					<img src={home} alt="home icon" className={styles["icon-img"]} />
				</div>
				<div className={styles["icon"]}>
					<img src={followers} alt="followers icon" className={styles["icon-img"]} />
				</div>
				<div className={styles["icon"]}>
					<img src={answer} alt="answer icon" className={styles["icon-img"]} />
				</div>
				<div className={styles["icon"]}>
					<img src={spaces} alt="spaces icon" className={styles["icon-img"]} />
				</div>
				<div className={styles["icon"]}>
					<img src={notification} alt="notification icon" className={styles["icon-img"]} />
				</div>
			</div>
			<div className={styles["search-input"]}>
				<img src={search} alt="search-icon" className={styles["search-icon"]} />
				<input type="text" placeholder="Search Quora" className={styles["input"]} />
			</div>
			<div className={styles["profile-language-button-container"]}>
				<div className={styles["avatar-holder"]}>
					<img
						onClick={() => auth.signOut()}
						src={user.photo}
						alt="avatar"
						className={styles["avatar-img"]}
					/>
				</div>
				<img src={language} alt="language" className={styles["language-icon"]} />
				<button className={styles["add-question-btn"]}>Add Question</button>
			</div>
		</div>
	);
}
