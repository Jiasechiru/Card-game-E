import React, { useEffect, useRef, useState, useContext } from "react";
import { PlayersContext } from "../../pages/StartPage/StartPage";

const PlayerCardStartMenu = () => {

    const playerCardColors = ["red-card", "yellow-card", "green-card", "blue-card", "orange-card", "purple-card"];

    const [playersList, setPlayersList] = useContext(PlayersContext)

    function deleteItem(e) {
        console.log([...playersList], "nada", e.target.id);
        let newmass = [...playersList];
        newmass.splice(e.target.id, 1)

        setPlayersList(newmass);
    }

    function changeInputValue(e) {
        let newPlayersList = [...playersList]
        newPlayersList[e.target.id] = e.target.value;
        setPlayersList(newPlayersList); 
        console.log(e.target.id);
    }
    return (
        <div>
            {playersList.map((item, index) => {
                return( 
                    <div key={index} className={playerCardColors[index]}>
                        <input id={index} onChange={changeInputValue} type="name" value={item == "~" ? `Игрок ${index + 1}` : item} name="name"/>
                        <button id={index} onClick={deleteItem}>Х</button>
                    </div>
                )
            })}
            
        </div>
    )
}

export default PlayerCardStartMenu;