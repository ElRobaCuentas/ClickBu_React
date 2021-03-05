import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Acceder from '../views/Acceder'
import Gramatica from '../views/Gramatica'
import Premium from '../views/Premium'
import Registrate from '../views/Registrate'
import Traductor from '../views/Traductor'
import Verbos from '../views/Verbos'
import Vocabulario from '../views/Vocabulario'

const AppRoute = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={ Traductor }/>
                <Route path="/traductor" component={ Traductor }/>
                <Route path="/verbos" component={ Verbos }/>
                <Route path="/vocabulario" component={ Vocabulario }/>
                <Route path="/gramatica" component={ Gramatica }/>
                <Route path="/premium" component={ Premium}/>
                <Route path="/login" component={ Acceder}/>
                <Route path="/signup"component={ Registrate}/>

                <Redirect to="/"/>
            </Switch>
        </Router>
    )
}

export default AppRoute
