import { useState } from "react";

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

function Item({ value }) {
    return <div className="itemContainer">{value}</div>;
}

export default function App() {
    return (
        <div className="appContainer">
            <Item />
            <Input />
        </div>
    );
}
