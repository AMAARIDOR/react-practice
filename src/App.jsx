import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ movieName }) {
  function handleClick() {
    alert(`Playing movie ${movieName}`);
  }

  return <Button onClick={handleClick}>Play {movieName}</Button>;
}

function UploadButton() {
  return <Button onClick={() => alert("Uploading!")}>Upload Image</Button>;
}

export default function ToolBar() {
  return (
    <>
      <PlayButton movieName="Kiki do you love me!?" />
      <UploadButton />
    </>
  );
}
