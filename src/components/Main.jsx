import React from "react";
// import styles from "../styles/main.module.css";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export function Main() {
	return (
		<div id="container">
			<Navbar />
			<div className="content">
				<Sidebar />
			</div>
		</div>
	);
}
