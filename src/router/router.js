import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from "../pages/dashboard-page";
import LmsPages from "../pages/lms-pages";
import Login from "./../pages/login/login-page";
import Error from "../pages/error-page";
import Register from "./../pages/register/register-pages";

export default function AppRouter() {
  return (
    <Router>
 
        <Switch>
           <Route exact path="/"component={LmsPages}/>
           <Route path="/register"component={Register}/>
           <Route path="/dash"component={Dashboard}/>
           <Route path="/admin"component={Login}/>
           <Route path="*"component={Error}/>
        </Switch>
      
    </Router>
  );
}