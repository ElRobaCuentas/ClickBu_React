import React from 'react'
import Menu from '../common/Menu'

const Wrapper = (props) => {
    return (
        <>
            <div className="container">
                <header className="header">
                    <Menu />
                </header>
                <main className="main">
                    {props.children}
                </main>
            </div>
        </>
    )
}

export default Wrapper
