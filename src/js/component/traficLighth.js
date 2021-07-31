import React, { useState } from "react";
import "./traficLight.css";

export function TraficLight() {
	const [color, setColor] = useState("next");
	return (
		<div className="center">
			<h1
				className={`red divAll  ${color === "red" ? "shadowe" : null}`}
				onClick={() => setColor("red")}></h1>
			<h1
				className={`green divAll  ${
					color === "green" ? "shadowe" : null
				}`}
				onClick={() => setColor("green")}></h1>
			<h1
				className={`yellow divAll ${
					color === "yellow" ? "shadowe" : null
				}`}
				onClick={() => setColor("yellow")}></h1>
		</div>
	);
}
