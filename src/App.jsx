import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

export default function App() {
  return (
    <div>
      <AlertButton message={"Playing!"}>Play Movie</AlertButton>
      <AlertButton message={"Uploading!"}>Upload Video</AlertButton>
    </div>
  );
}
