import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
// import style from "./HelloPage.module.css";

const HelloPage = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/start');
    };
    return (
        <>
            <NavBar/>
            <div>
                <button onClick={handleClick}>Start</button>
            </div>
        </>
    )
}

export default HelloPage;