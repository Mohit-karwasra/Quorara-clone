import React from "react";
import "../styles/main.css";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Feed } from "./Feed";
import { QuestionsBox } from "./QuestionsBox";

export function Main() {
	return (
		<div id="main-container">
			<Navbar />
			<div className="main-content">
				<div className="main-sidebar-container">
					<Sidebar />
				</div>
				<Feed />
				<QuestionsBox />
			</div>
		</div>
	);
}
