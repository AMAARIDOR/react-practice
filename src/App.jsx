import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

export default function App() {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                alert("Submitting");
            }}
        >
            <input />
            <button>Send</button>
        </form>
    );
}
