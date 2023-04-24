import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [person, setPerson] = useState({
    name: "Amaari",
    projects: {
      first_project: "TodoApp",
      second_project: "Calculator",
      third_project: "WeatherApp",
    },
  });

  function handleChange(event) {
    setPerson({
      ...person,
      projects: {
        ...person.projects,
        forth_project: event.target.value,
      },
    });
  }

  return (
    <div>
      <input value={person.projects.forth_project} onChange={handleChange} />
      <p>This is my forth project: {person.projects.forth_project}</p>
    </div>
  );
}

export default App;
