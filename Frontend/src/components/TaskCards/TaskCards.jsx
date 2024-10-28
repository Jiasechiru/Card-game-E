import React from "react";
import style from "./TaskCards.module.css";

const TaskCards = (props) => {

    // console.log(props)

    return (
        <div className={style["task-card"]}>
            <p className={style["task-card-theme"]}>{props.card.theme}</p>
            <div>
                <ul className={style["task-list"]}>
                    <li>{props.card.task1}</li>
                    <li>{props.card.task2}</li>
                    <li>{props.card.task3}</li>
                    <li>{props.card.task4}</li>
                    <li>{props.card.task5}</li>
                </ul>
            </div>
        </div>
    )
}

export default TaskCards;