import React, { useEffect, useState } from "react";
import "../styles/feed.css";
import { FeedProfileBox } from "./FeedProfileBox";
import { Post } from "./Post";
import { db } from "../config/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

export function Feed() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchAnswers = async () => {
			// if (questionId) {
			try {
				const answersRef = collection(db, "Newanswers");
				const answersQuery = query(answersRef, orderBy("timestamp", "desc"));
				const unsubscribe = onSnapshot(answersQuery, (snapshot) => {
					const answers = snapshot.docs.map((doc) => ({
						id: doc.id,
						answers: doc.data(),
					}));

					setPosts(answers);
				});
				return unsubscribe;
			} catch (error) {
				console.error("Error fetching answers:", error);
			}
			// }
		};

		fetchAnswers();
	}, []);

	return (
		<div className="feed-container">
			<FeedProfileBox />
			{posts.map(({ id, answers }) => (
				<Post
					key={id}
					Id={id}
					imageUrl={answers.imageUrl}
					answer={answers.answer}
					question={answers.question}
					timestamp={answers.timestamp}
					users={answers.user}
				/>
			))}
		</div>
	);
}
