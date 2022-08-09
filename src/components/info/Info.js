import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./info.module.css"

function Info(props) {
    return (
        <div>
            <ul>
                <li>
                    <NavLink className={classes.info} to="/">Header</NavLink>
                </li>

                <li>
                    <NavLink className={classes.info} to="/footer">Footer</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Info;