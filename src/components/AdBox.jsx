import React from "react";
import "../styles/adbox.css";

export const AdBox = () => {
	return (
		<div className="adBox">
			<div className="adBox-header">
				<h5>This section contains ads</h5>
			</div>
			<div className="adBox-ads">
				<div className="adBox-ad">
					<img
						src="https://i.pinimg.com/originals/8a/ce/ea/8aceea35189f54014d6eef7ebbfcfa65.jpg"
						alt="rayban Ad"
					/>
				</div>
				<div className="adBox-ad">
					<img
						src="https://img.mensxp.com/media/content/2020/Nov/Iconic-Ads-Indian-TV-Ads-3_5fbe48676bd35.jpeg"
						alt="rayban Ad"
					/>
				</div>
			</div>
		</div>
	);
};
