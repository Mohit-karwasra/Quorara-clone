import React from "react";
import "../styles/feedprofilebox.css";
import answer from "../assets/writing_5812594.png";
import question from "../assets/conversation.png";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

export function FeedProfileBox() {
	const user = useSelector(selectUser);
	return (
		<div className="feedProfileBox">
			<div className="feedProfileBox-info">
				<img src={user.photo} alt="avatar" className="avatar-img" />
				<div>What do you want to ask or share?</div>
			</div>
			<div className="feedProfileBox-buttons">
				<div className="feedProfileBox-button">
					<img src={question} alt="Question" />
					<p>Ask</p>
				</div>
				<div className="feedProfileBox-button">
					<img src={answer} alt="Answer" />
					<p>Answer</p>
				</div>
			</div>
		</div>
	);
}
