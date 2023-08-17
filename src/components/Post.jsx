import React from "react";
import "../styles/post.css";
import upward from "../assets/up.png";
import downward from "../assets/down-arrow.png";
import chat from "../assets/chat.png";
import share from "../assets/recycle.png";
import more from "../assets/more.png";
import avatar from "../assets/man.png";
import { useDispatch } from "react-redux";
import { setQuestionInfo } from "../features/questionSlice.js";

// import { selectUser } from "../features/userlice";

export function Post({ Id, answer, question, imageUrl, timestamp, user }) {
	// const user = useSelector(selectUser);

	const dispatch = useDispatch();

	return (
		<div
			className="post"
			onClick={() =>
				dispatch(
					setQuestionInfo({
						questionId: Id,
						questionName: question,
					})
				)
			}
		>
			<div className="post-answer">
				<>
					<div className="post-info">
						<img src={user.photo !== null ? `${user.photo}` : `${avatar}`} />
						<div className="post-username-day">
							<h5>{user.displayName ? user.displayName : user.email}</h5>
							<small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
						</div>
					</div>
					<div style={{ margin: "8px", backgroundColor: "rgb(235,235,235)", padding: "8px" }}>
						<h5 className="post-question">{question}</h5>
						<p
							key={Id}
							style={{
								position: "relative",
								paddingBottom: "5px",
								margin: "8px",
							}}
						>
							<span>
								{answer}
								<br />
							</span>
							{imageUrl && <img src={imageUrl} alt="answer" className="answer__image" />}
						</p>
					</div>
				</>
			</div>

			<div className="post-footer">
				<div className="post-actions">
					<div>
						<img src={upward} alt="up arrow" className="up-arrow" />
					</div>
					<div>
						<img src={downward} alt="down arrow" className="down-arrow" />
					</div>
				</div>
				<div className="post-chat-share">
					<img src={chat} alt="chat icon" />
					<p>comments</p>
					<img src={share} alt="share icon" className="post-share-icon" />
					<p>share</p>
				</div>
				<img src={more} alt="more" />
			</div>
		</div>
	);
}
