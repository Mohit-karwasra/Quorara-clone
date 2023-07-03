import React from "react";
import "../styles/post.css";
import upward from "../assets/up.png";
import downward from "../assets/down-arrow.png";
import chat from "../assets/chat.png";
import share from "../assets/recycle.png";
import more from "../assets/more.png";
// import { useSelector } from "react-redux";
// import { selectUser } from "../features/userSlice";

export function Post({ Id, question, imageUrl, timestamp, users }) {
	// const user = useSelector(selectUser);
	// console.log(users);

	return (
		<div className="post">
			<div className="post-info">
				<img src={users.photo} alt="avatar" />
				<div className="post-username-day">
					<h5>{users.displayName ? users.displayName : users.email}</h5>
					<small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
				</div>
			</div>
			<div className="post-body">
				<div className="post-question">
					<p>{question}</p>
					<button className="post-answerBtn">Answer</button>
				</div>
				<div className="post-image">
					<img src={imageUrl} alt="question" />
				</div>
				<div className="post-answer">
					<p>Answers para</p>
				</div>
				<div className="post-footer">
					<div className="post-actions">
						<img src={upward} alt="up arrow" className="up-arrow" />
						<img src={downward} alt="down arrow" className="down-arrow" />
					</div>
					<div className="post-chat-share">
						<img src={chat} alt="chat icon" />
						<p>chat</p>
						<img src={share} alt="share icon" className="post-share-icon" />
						<p>share</p>
					</div>
					<img src={more} alt="more" />
				</div>
			</div>
		</div>
	);
}
