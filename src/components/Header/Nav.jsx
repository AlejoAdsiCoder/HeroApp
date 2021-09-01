import React from 'react'
import logo from '../../assets/images/logo.png'
import '../../assets/styles/Nav.scss'
import Home from '../layouts/Home'

const Nav = () => {
    return (
        <div>
            
            <nav className="header">
                <Home>
                <div className="header__logo">
                    <img src={logo} alt="" />
                </div>
                
                <ul className="header__menu">
                    <li>Heroes Anteriores</li>
                    <li>¿Como Funciona?</li>
                    <li>Iniciar sesión</li>
                    <li></li>
                </ul>
                </Home>
            </nav>
            
        </div>
    )
}

export default Nav