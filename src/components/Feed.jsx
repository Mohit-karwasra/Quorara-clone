import React, { useEffect, useState } from "react";
import "../styles/feed.css";
import { FeedProfileBox } from "./FeedProfileBox";
import { Post } from "./Post";
import { db } from "../config/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

export function Feed() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const questionsCollectionRef = collection(db, "questions");
				const q = query(questionsCollectionRef, orderBy("timestamp", "desc"));
				const unsubscribe = onSnapshot(q, (snapshot) => {
					const fetchedPosts = snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}));
					setPosts(fetchedPosts);
				});

				return () => unsubscribe(); // Clean up the subscription when the component unmounts
			} catch (error) {
				console.log("Error fetching posts:", error);
			}
		};

		fetchPosts();
	}, []);

	return (
		<div className="feed-container">
			<FeedProfileBox />
			{posts.map(({ id, data }) => (
				<Post
					key={id}
					Id={id}
					question={data.question}
					imageUrl={data.imageUrl}
					timestamp={data.timestamp}
					users={data.user}
				/>
			))}
		</div>
	);
}
