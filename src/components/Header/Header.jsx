import React from 'react';
import s from './Header.module.css';
import reactLogo from '../../assets/image/react-logo.png'

const Header = () => {
    return <header className={s.header}>
        <img src={reactLogo} alt='#'/>
    </header>
}

export default Header;