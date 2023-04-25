import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

export default function App() {
	return (
		<div
			className="Toolbar"
			onClick={() => {
				alert("You clicked on the this toolbar!");
			}}
		>
			<button onClick={() => alert("Playing")}>Play movie</button>
			<button onClick={() => alert("Upoading")}>Upload Image</button>
		</div>
	);
}
