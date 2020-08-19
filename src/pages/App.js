import React from "react";
import {Route, HashRouter} from "react-router-dom";

import Me from "./me/Me";
import Career from "./career/Career";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";

import Container from "react-bootstrap/Container";
import NavbarBP from "../components/navbarBP/navbarBP";

import './App.css'

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavbarBP />
                <Container fluid>
                    <HashRouter>
                        <Route exact path={'/'} component={Me}/>
                        <Route path={'/Me'} component={Me}/>
                        <Route path={'/Career'} component={Career}/>
                        <Route path={'/Projects'} component={Projects}/>
                        <Route path={'/Contacts'} component={Contacts}/>
                    </HashRouter>
                </Container>
            </React.Fragment>
        )
    }
}

export default App;