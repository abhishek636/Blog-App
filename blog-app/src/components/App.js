import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Signup from "./Signup";
import Home from "./Home";
import Login from "./Login";
import NoMatch from "./NoMatch";
function App(){
    return(
        <>
        <Header/>
        <Switch>
        <Route exact path={"/"}>
            <Home/>
        </Route>
        <Route path="/signin">
            <Login/>
        </Route>
        <Route path="/signup">
            <Signup/>
        </Route>
        <Route path="*">
            <NoMatch/>
        </Route>
        </Switch>
        
        </>
    )
}

export default App;