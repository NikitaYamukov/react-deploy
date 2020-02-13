import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <img
            src='https://upload.wikimedia.org/wikipedia/commons/6/63/Logo_tutu_480x270_%D0%B1%D0%B5%D0%B7_%D1%84%D0%BE%D0%BD%D0%B0.png'/>
    </header>
}

export default Header;