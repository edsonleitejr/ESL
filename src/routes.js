import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from './auth';

import Texto from "./components/Texto";
import Servico from "./components/Servico";

const PrivateRoute = ({ component: Component, ... rest }) => (
    <Route { ... rest} render ={props => (
        isAuthenticated() ? (
            <Component { ... props } />
        ) : (
            <Redirect to = {{ pathname: '/', state: {from: props.location} }} />
        )
    )} />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/Texto" component ={Texto} />
            <Route exact path="/Servico" component ={Servico} />
            <PrivateRoute path="/app" component = {() => <h1> Você está Logado </h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;