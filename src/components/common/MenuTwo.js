import React from 'react'
import { Link } from 'react-router-dom';
import './styles/menu-two.css'

const MenuTwo = () => {
    return (
        <>
           <div className="menu_padre2">
                <div className="logo_pagina2">
                    <Link to="/">
                        <img src="http://www.openenglish.com/wp-content/uploads/2016/09/Open-English-Logo_og.jpg" alt=""/>
                    </Link>
                </div>
                <div className="rutas3"> 
                    <Link to="/traductor">Traductor</Link> 
                    <Link to="/verbos">Verbos</Link> 
                    <Link to="/vocabulario">Vocabulario</Link> 
                    <Link to="/gramatica">Gramática</Link> 
                    <Link to="/premium">Premium</Link> 
                    <Link to="">
                        <i class="fas fa-ellipsis-h"></i>
                    </Link>
                </div>
                <div className="rutas4">
                    <Link to="/login">Acceder</Link>
                    <Link to="/signup">Registrate</Link>
                </div>
            </div> 
        </>
    )
}

export default MenuTwo

