import React from "react";
import "../styles/post.css";
import avatar from "../assets/man.png";
import upward from "../assets/up.png";
import downward from "../assets/down-arrow.png";
import chat from "../assets/chat.png";
import share from "../assets/recycle.png";
import more from "../assets/more.png";

export function Post() {
	return (
		<div className="post">
			<div className="post-info">
				<img src={avatar} alt="avatar" />
				<div className="post-username-day">
					<h5> user name</h5>
					<small>time stamp</small>
				</div>
			</div>
			<div className="post-body">
				<div className="post-question">
					<p>Question</p>
					<button className="post-answerBtn">Answer</button>
				</div>
				<div className="post-image">
					<img
						src="https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_640.jpg"
						alt="question"
					/>
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
