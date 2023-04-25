import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function Button({ onSmash, children }) {
  return <button onClick={onSmash}>{children}</button>;
}

function PlayButton({ movieName }) {
  function handleClick() {
    alert(`Playing movie ${movieName}`);
  }

  return <Button onSmash={handleClick}>Play {movieName}</Button>;
}

function UploadButton() {
  return <Button onSmash={() => alert("Uploading!")}>Upload Image</Button>;
}

export default function ToolBar() {
  return (
    <>
      <PlayButton movieName="Kiki do you love me!?" />
      <UploadButton />
    </>
  );
}
