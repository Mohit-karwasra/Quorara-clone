import React, { useState, useEffect } from "react";
import "../styles/questionsBox.css";
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
	const [isCollapsed, setIsCollapsed] = useState(true);

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
			questionId: question.id,
			question: question.data.question,
			imageUrl: link,
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

	const toggleCollapse = () => {
		setIsCollapsed(!isCollapsed);
	};

	return (
		<div className={`question-box ${isCollapsed ? "" : "expanded"}`}>
			<div className="question-box-header" onClick={toggleCollapse}>
				<span>{isCollapsed ? "☰" : "✕"}</span>
			</div>
			<div className={`question-box__question ${isCollapsed ? "" : "expanded"}`}>
				<h5>Questions</h5>
				{questions.map((question) => (
					<div className="question-box__question" key={question.id}>
						<h3>{question.data.question}</h3>
						<button
							onClick={() => {
								setIsCollapsed(true);
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
						<div className="modal__question">
							<div>
								<h1>{qToA.data.question}</h1>
							</div>
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
