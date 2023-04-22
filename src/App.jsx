import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function Item({ name, isPacked }) {
    return (
        <li className="item">
            {isPacked ? ( <del> {name + " ✔"} </del> ) : name}
        </li>
    )
}

function App() {
    return (
        <>
        <ul>
            <Item isPacked={true} name="Space Suit" />
            <Item isPacked={false} name="Helmet with a golden Leaf" />
            <Item isPacked={true} name="Cologne" />
            <Item isPacked={true} name="Photo of Jerry" />
        </ul>
        </>
    )
}

export default App;
