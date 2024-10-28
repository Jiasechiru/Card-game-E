import React, {useEffect, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import PlayerCardGame from "../../components/PLayerCardGame/PlayerCardGame";
import TaskCards from "../../components/TaskCards/TaskCards";
import style from "./GamePage.module.css";

const GamePage = () => {

    const [playersGame, setPlayersGame] = useState([]);
    const [activePlayer, setActivePLayer] = useState(0);
    const [isPLayTime, setIsPlayTime] = useState(false);
    const [isTimerSet, setIsTimerSet] = useState(false);
    const [timerInterval, setTimerInterval] = useState(60000);
    const [timerId, setTimerId] = useState(null);
    const [intervalId, setIntervalId] = useState(null);
    const [timerPause, setTimerPaused] = useState(false);
    const points = useRef(0);
    const [card, setCard] = useState({theme: "Тема", task1: "Задание 1", task2: "Задание 2", task3: "Задание 3", task4: "Задание 4", task5: "Задание 5"})

    useEffect(() => {
        const playerCardColors = ["red-card", "yellow-card", "green-card", "blue-card", "orange-card", "purple-card"];
        const playersLocal = JSON.parse(localStorage.getItem('usersList')) || [];
        const playersList = playersLocal.map((item, index) => {
            return({id: index, name: item, score: 0, color: playerCardColors[index]});     
        })
        setPlayersGame(playersList);
    }, [])

    useEffect(() => {
        console.log(activePlayer, "Effect Active player change")
    }, [activePlayer])

    // function showCard(){
    //     setIsPlayTime(true);
    //     setIsTimerSet(true);
    //     const intervalSec = setInterval(() => {
    //         setTimerInterval(timerInterval - 1000);
    //     }, 1000)
    //     setIntervalId(intervalSec);
    //     const timeOutId = setTimeout(() => {
    //         clearInterval(intervalId)
    //         setTimerInterval(10000);
    //         setIsTimerSet(false)
    //     }, timerInterval);
    //     setTimerId(timeOutId);
    // }

    // function pauseGame () {
    //     clearTimeout(timerId);
    //     setIsTimerSet(false);
    // }

    function showCard() {
        setIsPlayTime(true);
        setIsTimerSet(true);
        
        // Устанавливаем начальное значение таймера
        const initialTimerValue = timerInterval; // Сохраняем текущее значение таймера
        const intervalSec = setInterval(() => {
            setTimerInterval(prev => {
                if (prev <= 0) {
                    clearInterval(intervalSec); // Очищаем интервал, если таймер достиг 0
                    return 0; // Возвращаем 0, чтобы избежать отрицательных значений
                }
                return prev - 1000; // Уменьшаем на 1000 мс
            });
        }, 1000);
        
        setIntervalId(intervalSec);
        
        const timeOutId = setTimeout(() => {
            clearInterval(intervalSec); // Очищаем интервал
            setTimerInterval(60000); // Сброс таймера
            setIsTimerSet(false);
        }, initialTimerValue);
    
        setTimerId(timeOutId);
    }
    
    function pauseGame() {
        setTimerPaused(true);
        clearTimeout(timerId);
        clearInterval(intervalId); // Очищаем интервал при паузе
    }

    function resumeGame(){
        setTimerPaused(false);
        showCard();
    }
    
    function ChangeActivePlayer () {
        const newPLayersGame = [...playersGame]
        newPLayersGame[activePlayer].score += points.current;
        points.current = 0;
        setPlayersGame(newPLayersGame);
        setActivePLayer((activePlayer + 1) % playersGame.length);
        setIsPlayTime(false);
    }

    console.log(playersGame);


    return(
        <>
            <NavBar/>
            <div className={style["game-page"]}>
                <div className={style["players-list"]}>
                    {playersGame.map((item) => {
                        return(<PlayerCardGame key={item.name} player = {item}/>)
                    })}
                </div>
                <div className={style["game-field"]}>
                    {isPLayTime === true 
                    ? 
                    <div>
                        {isTimerSet === true ? timerPause === true ? <div><p>{timerInterval / 1000}</p><button onClick={resumeGame}>Продолжить игру</button></div> : <div><TaskCards card = {card}/><div>{timerInterval / 1000}</div><button onClick={pauseGame}>Stop game</button></div> : 
                        <div>
                            <div>Колличество очков</div>
                            <button onClick={(e) => {points.current = 0}}>0</button>
                            <button onClick={(e) => {points.current = 1}}>1</button>
                            <button onClick={(e) => {points.current = 2}}>2</button>
                            <button onClick={(e) => {points.current = 3}}>3</button>
                            <button onClick={(e) => {points.current = 4}}>4</button>
                            <button onClick={(e) => {points.current = 5}}>5</button>
                            <button onClick={(e) => {points.current = 6}}>6</button>
                            <button onClick={ChangeActivePlayer}>Next</button>
                        </div>}
                    </div>
                    : 
                    <button onClick={showCard}>Start play Time</button>}
                </div>
            </div>
        </>
    )
}

export default GamePage;




















    // function addP() {
    //     const newPLayersGame = [...playersGame]
    //     newPLayersGame[0].score++;
    //     setPlayersGame(newPLayersGame);
    // }