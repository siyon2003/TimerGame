import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const [enteredName,setEnteredName] = useState();
  const playerName = useRef();
  const handleSubmit = () =>{
    setEnteredName(playerName.current.value)
  }
  return (
    <section id="player">
      <h2>Welcome {enteredName ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
