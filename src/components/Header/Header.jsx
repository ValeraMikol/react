import React from 'react';
import styled from './Header.module.css';
import reactLogo from '../../assets/image/react-logo.png'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <header className={styled.header}>
        <div className={styled.headerBody}>
            <NavLink to={'/profile'}>
            <img src={reactLogo} alt='#'/>
            </NavLink>
            

            <div className={styled.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'} className={styled.loginButton}>Login</NavLink>} 
            </div>
        </div>
    </header>
}

export default Header;