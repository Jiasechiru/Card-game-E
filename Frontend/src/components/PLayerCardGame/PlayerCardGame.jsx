import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./PlayerCardGame.module.css";

const PlayerCardGame = (props) => {

    console.log(props.player.color)

    return (
        <div className={`${style["player-card-game"]} ${style[props.player.color]}`}>
            <p className={style["player-card-name"]}>{props.player.name}</p>
            <p className={style["player-card-score"]}>{props.player.score}</p>
        </div>
    )
}

export default PlayerCardGame;