import React from "react";
import "../styles/main.css";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Feed } from "./Feed";
import { AdBox } from "./AdBox";

export function Main() {
	return (
		<div id="main-container">
			<Navbar />
			<div className="main-content">
				<Sidebar />
				<Feed />
				<AdBox />
			</div>
		</div>
	);
}
