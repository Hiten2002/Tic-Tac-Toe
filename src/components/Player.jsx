import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName}) {
  const [playerName, serSaveName ] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    onChangeName(symbol, playerName)
  }

  function handleSaveValue(event){
    serSaveName(event.target.value)
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input type="text" required  value={playerName} onChange={handleSaveValue}/>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
