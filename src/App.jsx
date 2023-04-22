import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const people = [{
    id: 1,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 2,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 3,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    id: 4,
    name: 'Percy Lavon Julian',
    profession: 'chemist',  
  }, {
    id: 5,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];

function App() {
    const chemists = people.filter(person => person.profession === "chemist")
    
    const listItems = chemists.map(person => <li key={person.id}> {person.name} {person.profession} </li>)

    return (
        <>
            <ul>
                {listItems}
            </ul>
        </>
    )
}

export default App;
