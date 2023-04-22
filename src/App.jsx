import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <Toolbar
      onPlayMovie={() => alert("Playing movie")}
      onPlayMusic={() => alert("Playing music")}
    />
  );
}

function Toolbar({ onPlayMovie, onPlayMusic }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onPlayMusic}>Play Music</Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return <button onClick={onClick}> {children}</button>;
}

export default App;
