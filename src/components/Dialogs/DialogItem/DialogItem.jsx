import React from 'react';
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let pach = '/dialogs/' + props.id;
    return <div className={`${s.dialog} ${s.active}`}>
        <NavLink to={pach}>{props.name}</NavLink>
    </div>
}

export default DialogItem;