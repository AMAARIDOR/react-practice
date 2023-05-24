import { useState } from "react";

function ItemRow() {
    return <div className="itemsRow"></div>;
}

function Input() {
    const [message, setMessage] = useState("");
    const [update, setUpdated] = useState(message);

    const handleChange = (e) => setMessage(e.target.value);
    const handleClick = () => setUpdated(message);

    return (
        <div className="inputContainer">
            <input type="text" onChange={handleChange} value={message} />
            <button onClick={handleClick}>Add Item +</button>
        </div>
    );
}

function Item({ update }) {
    return <div className="itemContainer">{update}</div>;
}

export default function App() {
    return (
        <div className="appContainer">
            <Item />
            <Input />
        </div>
    );
}
