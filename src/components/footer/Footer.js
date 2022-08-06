import React from 'react';
import {NavLink} from "react-router-dom";
import classes from "./Footer.module.css";

function Footer(props) {
    return (
        <div>
            <ul>
                <li>
                    <NavLink className={classes.footer} to="/pages">Footer page</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Footer;