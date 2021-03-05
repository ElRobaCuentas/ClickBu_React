import React from 'react'
import MenuTwo from '../common/MenuTwo'

const WrapperTwo = (props) => {
    return (
        <>
            <div className="container2">
                <header className="header2">
                    <MenuTwo />
                </header>
                <main className="main2">
                    {props.children}
                </main>
            </div>
        </>
    )
}

export default WrapperTwo
