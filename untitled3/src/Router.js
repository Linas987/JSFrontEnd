import React, {useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch ,Redirect} from 'react-router-dom';
//import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import Login from "./components/Login";
import Register from "./components/Register";
import App from './App';
import Lister from "./components/Lister";
import useToken from "./components/useToken";
import {Nav} from "./Nav";
import Update from "./components/Update";


function Router() {
    const { token, setToken } = useToken();
    if(!token) {
        return( <>
            <Nav/>
            <BrowserRouter>
            <div style={{paddingBottom: '160px'}}/>
                <Switch>
                    <Route path="/dashboard">
                        <Login setToken={setToken}/>
                    </Route>
                    <Route path="/register">
                        <Register setToken={setToken}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>)
    }
        //onsole.log(token);
        return (<BrowserRouter>
            <Nav/>
    <div style={{paddingBottom: '160px'}}/>
                <Switch>
                    <Route path="/dashboard">
                        <App props={token}/>
                    </Route>
                    <Route path="/list">
                        <Lister/>
                    </Route>
                    <Route path="/preferences">
                        <Preferences/>
                    </Route>
                    <Route path="/update">
                        <Update setToken={setToken} props={token}/>
                    </Route>
                </Switch>
</BrowserRouter>
        );

}

export default Router;
