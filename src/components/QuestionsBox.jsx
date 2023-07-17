import React, { useState } from "react";
import "../styles/questionsBox.css";
import { useEffect } from "react";
import {
	addDoc,
	collection,
	onSnapshot,
	orderBy,
	query,
	serverTimestamp,
} from "firebase/firestore";
import { db } from "../config/firebase";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

export const QuestionsBox = () => {
	const [questions, setQuestions] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [answer, setAnswer] = useState("");
	const [qToA, setQToA] = useState({});
	const [link, setLink] = useState("");

	const user = useSelector(selectUser);

	useEffect(() => {
		const fetchedQuestions = async () => {
			try {
				const questionsCollectionRef = collection(db, "questions");
				const q = query(questionsCollectionRef, orderBy("timestamp", "desc"));
				const unsubscribe = onSnapshot(q, (snapshot) => {
					const fetchedQuestions = snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}));
					setQuestions(fetchedQuestions);
				});

				return () => unsubscribe(); // Clean up the subscription when the component unmounts
			} catch (error) {
				console.log("Error fetching posts:", error);
			}
		};

		fetchedQuestions();
	}, []);

	const handleAnswer = (e, question) => {
		e.preventDefault();

		addDoc(collection(db, "Newanswers"), {
			questionId: question.id, // Update the property name to `question.id`
			question: question.data.question,
			answer: answer,
			user: user,
			timestamp: serverTimestamp(),
		})
			.then(() => {
				console.log("Answer added successfully!");
				setAnswer("");
				setIsModalOpen(false);
			})
			.catch((error) => {
				console.error("Error adding answer: ", error);
			});
	};

	return (
		<div className="question-box">
			<div className="question-box-header">
				<h5>This section contains questions</h5>
			</div>
			<div>
				{questions.map((question) => (
					<div className="question-box__question">
						<h3>{question.data.question}</h3>
						<button
							onClick={() => {
								setIsModalOpen(true);
								setQToA(question);
							}}
							className="post-answerBtn"
						>
							Answer
						</button>
					</div>
				))}
				{isModalOpen && (
					<Modal
						isOpen={isModalOpen}
						onRequestClose={() => setIsModalOpen(false)}
						className="answer-modal"
					>
						{/* {console.log(qToA)} */}
						<div className="modal__question">
							<h1>{qToA.data.question}</h1>
							<p>
								asked by{" "}
								<span className="name">
									{qToA.data.user.displayName ? qToA.data.user.displayName : qToA.data.user.email}
								</span>{" "}
								on{" "}
								<span className="name">
									{new Date(qToA.data.timestamp?.toDate()).toLocaleString()}
								</span>
							</p>
						</div>
						<div className="modal__answer">
							<textarea
								value={answer}
								onChange={(e) => setAnswer(e.target.value)}
								placeholder="Enter Your Answer"
								type="text"
							/>
							<input
								type="text"
								value={link}
								placeholder="Enter image link"
								onChange={(e) => setLink(e.target.value)}
							/>
						</div>
						<div className="modal-cancelBtn-addBtn">
							<button className="cancelBtn" onClick={() => setIsModalOpen(false)}>
								Cancel
							</button>
							<button type="submit" onClick={(e) => handleAnswer(e, qToA)} className="addAnswerBtn">
								Add Answer
							</button>
						</div>
					</Modal>
				)}
			</div>
		</div>
	);
};
