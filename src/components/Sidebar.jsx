import React from "react";
import "../styles/sidebar.css";
import { SidebarTopics } from "./SidebarTopics";

export function Sidebar() {
	return (
		<div className="sidebar">
			<SidebarTopics />
		</div>
	);
}
