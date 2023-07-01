import React from "react";
import "../styles/feed.css";
import { FeedProfileBox } from "./FeedProfileBox";
import { Post } from "./Post";

export function Feed() {
	return (
		<div className="feed-container">
			<FeedProfileBox />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
		</div>
	);
}
