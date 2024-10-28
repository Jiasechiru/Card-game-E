import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import PlayerCardStartMenu from "../../components/PlayerCardStartMenu/PlayerCardStartMenu";
// import style from "./StartPage.module.css";


export const PlayersContext = React.createContext();

const StartPage = () => {

    const navigate = useNavigate();

    function useLocalStorage(key, initialValue) {
        const [value, setValue] = useState(() => {
          const storedValue = localStorage.getItem(key);
          return storedValue ? JSON.parse(storedValue) : initialValue;
        });
      
        useEffect(() => {
          localStorage.setItem(key, JSON.stringify(value));
        }, [value, key]);
      
        return [value, setValue];
    }
    

    const [playersList, setPlayersList] = useState(JSON.parse(localStorage.getItem('usersList')));
    
    const [storedUsers, setStoredUsers] = useLocalStorage("usersList", playersList);

    async function startTheGame() {
        await setStoredUsers(playersList);
        navigate("/game");
    }

    return (
        <>
            <NavBar/>
            <div>
                <PlayersContext.Provider value={[playersList, setPlayersList]}>
                    <PlayerCardStartMenu/>
                </PlayersContext.Provider>
                <button onClick={() => {setPlayersList([...playersList, '~'])}}>+</button>
                <button onClick={startTheGame}>Начать игру</button>
                
            </div>
        </>
    )
}

export default StartPage;