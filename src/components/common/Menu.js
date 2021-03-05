import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './styles/menu.css'

const Menu = () => { 

    const [background, setBackground] = useState("blue")
    
    let backgroundMenu = document.getElementById("menu");
    console.log("respuesta: ", backgroundMenu)
    // backgroundMenu && (backgroundMenu.style.background = background);
    
    useEffect(() => {
        backgroundMenu && (backgroundMenu.style.background = background);
    }, [backgroundMenu])
    

    return (
        <>
            <div className="menu_padre" id="menu"> 
                <div className="logo_pagina">
                    <Link to="/">
                        <img src="http://www.openenglish.com/wp-content/uploads/2016/09/Open-English-Logo_og.jpg" alt=""/>
                    </Link>
                </div>
                <div className="rutas"> 
                    <Link to="/traductor">Traductor</Link> 
                    <Link to="/verbos">Verbos</Link> 
                    <Link to="/vocabulario">Vocabulario</Link> 
                    <Link to="/gramatica">Gramática</Link> 
                    <Link to="/premium">Premium</Link> 
                    <Link to="">
                        <i className="fas fa-ellipsis-h"></i>
                    </Link> 
                </div>
                <div className="rutas2">
                    <Link to="/login">Acceder</Link>
                    <Link to="/signup">Registrate</Link>
                </div>
            </div>
        </>
    )
}

export default Menu
