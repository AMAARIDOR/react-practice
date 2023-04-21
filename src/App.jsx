import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function Avatar({ person, height }) {
    return (
        <div>
            The the word's greatest person is {person.name}, {person.age} years
            old and he is {height}cm tall
        </div>
    );
}

function App() {
    return <Avatar person={{ name: "Amaari", age: 20 }} height={176} />;
}

export default App;
