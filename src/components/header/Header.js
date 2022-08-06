import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./Header.module.css";

function Footer(props) {
    return (
        <div>
            <ul>
                <li>
                    <NavLink className={classes.header} to="/">Header page</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Footer;