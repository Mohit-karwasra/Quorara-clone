import React, { useState } from "react";
import styles from "../styles/navbar.module.css";
import logo from "../assets/kindpng_4620573.png";
import home from "../assets/home_1946488.png";
import followers from "../assets/play_10111766.png";
import answer from "../assets/writing_5812594.png";
import spaces from "../assets/people.png";
import notification from "../assets/bell.png";
import search from "../assets/magnifying-glass.png";
import language from "../assets/globe.png";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth, db } from "../config/firebase";
import Modal from "react-modal";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";

export function Navbar() {
	const user = useSelector(selectUser);
	const [openModal, setOpenModal] = useState(false);
	const [questionInput, setQuestionInput] = useState("");
	const [questionImageUrl, setQuestionImageUrl] = useState("");

	const questionsCollectionRef = collection(db, "questions");

	const handleSubmit = (e) => {
		e.preventDefault();
		setOpenModal(false);

		addDoc(questionsCollectionRef, {
			user: user,
			question: questionInput,
			imageUrl: questionImageUrl,
			timestamp: serverTimestamp(),
		})
			.then(() => {
				setQuestionInput("");
				setQuestionImageUrl("");
			})
			.catch((err) => console.error(err));
	};

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
				<button onClick={() => setOpenModal(true)} className={styles["add-question-btn"]}>
					Add Question
				</button>
				<Modal
					className={styles["addQuestion-modal"]}
					isOpen={openModal}
					onRequestClose={() => setOpenModal(false)}
				>
					<div className={styles["modal-title"]}>
						<h5>Add Question</h5>
					</div>
					<div className={styles["modal-body"]}>
						<div className={styles["list-items"]}>
							<ul>
								Tips on getting good answers quickly
								<li>Make sure your question has not been asked already </li>
								<li>Keep your question short and to the point</li>
								<li> Double-check grammar and spelling</li>
							</ul>
						</div>
						<div className={styles["modal-info"]}>
							<img src={user.photo} alt="avatar" />
							<p>{user.displayName ? user.displayName : user.email}</p>
						</div>
						<input
							required
							value={questionInput}
							onChange={(e) => setQuestionInput(e.target.value)}
							type="text"
							placeholder="Start your question with 'What', 'How', 'Why', etc."
						/>
						<input
							value={questionImageUrl}
							onChange={(e) => setQuestionImageUrl(e.target.value)}
							placeholder="Enter image url for reference"
						/>
					</div>
					<div className={styles["modal-cancelBtn-addBtn"]}>
						<button onClick={() => setOpenModal(false)}>Cancel</button>
						<button
							onClick={(e) => handleSubmit(e)}
							className={styles["addQuestionBtn"]}
							type="submit"
						>
							Add Question
						</button>
					</div>
				</Modal>
			</div>
		</div>
	);
}
