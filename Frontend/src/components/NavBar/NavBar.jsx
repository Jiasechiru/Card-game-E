import React from "react";
import { useNavigate } from "react-router-dom";
// import style from "./NavBar.module.css";

const NavBar = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <>
            <nav>
                <div>
                    <button onClick={handleClick}>Home</button>
                    <label></label>
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                </div>
            </nav>
        </>
    )
}

export default NavBar;