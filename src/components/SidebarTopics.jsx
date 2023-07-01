import React from "react";
import "../styles/sidebarTopics.css";
import Design from "../assets/Design.jpeg";
import Psychology from "../assets/Psychology.jpeg";
import Music from "../assets/Music.jpeg";
import Technology from "../assets/Technology.jpeg";
import Books from "../assets/Books.jpeg";
import Business from "../assets/Business.jpeg";
import Science from "../assets/science.jpeg";
import addIcon from "../assets/plus.png";

export function SidebarTopics() {
	return (
		<div className="sidebarTopics">
			<div className="sidebarTopic">
				<img src={addIcon} alt="add icon" />
				<p>Create Space</p>
			</div>
			<div className="sidebarTopic">
				<img src={Design} alt="Design" />
				<p>Design</p>
			</div>
			<div className="sidebarTopic">
				<img src={Psychology} alt="Psychology" />
				<p>Psychology</p>
			</div>
			<div className="sidebarTopic">
				<img src={Music} alt="Music" />
				<p>Music</p>
			</div>
			<div className="sidebarTopic">
				<img src={Technology} alt="Technology" />
				<p>Technology</p>
			</div>
			<div className="sidebarTopic">
				<img src={Books} alt="Books" />
				<p>Books</p>
			</div>
			<div className="sidebarTopic">
				<img src={Business} alt="Business" />
				<p>Business</p>
			</div>
			<div className="sidebarTopic">
				<img src={Science} alt="Science" />
				<p>Science</p>
			</div>
		</div>
	);
}
