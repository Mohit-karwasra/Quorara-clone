import React from "react";
import "../styles/feedprofilebox.css";
import avatar from "../assets/man.png";
import answer from "../assets/writing_5812594.png";
import question from "../assets/conversation.png";

export function FeedProfileBox() {
	return (
		<div className="feedProfileBox">
			<div className="feedProfileBox-info">
				<img src={avatar} alt="avatar" className="avatar-img" />
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
