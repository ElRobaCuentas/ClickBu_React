import React from 'react'
import './styles/portada.css'
import Wrapper from '../../layout/Wrapper'

const Portada = (props) => {
    const tituloPortada = props.titulo
    console.log("estoy en traductor:", tituloPortada)
    return (
        <>
            <div className="main_portada">
                <h1>{tituloPortada}</h1>
            </div>
        </>
    )
}

export default Portada
