import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

let nextId = 3;
const initialArray = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function App() {
  function handleClick() {
    alert("You clicked me!");
  }

  return <button onClick={handleClick}>I do something</button>;
}
