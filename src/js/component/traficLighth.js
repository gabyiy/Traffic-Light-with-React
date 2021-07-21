import React, { useState } from "react";
import "./traficLight.css";

export function TraficLight() {
	const [color, setColor] = useState("next");
	return (
		<div className="center">
			<h1
				className={`red divAll  ${color === "red" ? "shadow" : null}`}
				onClick={() => setColor("red")}></h1>
			<h1
				className={`green divAll  ${
					color === "green" ? "shadow" : null
				}`}
				onClick={() => setColor("green")}></h1>
			<h1
				className={`yellow divAll ${
					color === "yellow" ? "shadow" : null
				}`}
				onClick={() => setColor("yellow")}></h1>
		</div>
	);
}
