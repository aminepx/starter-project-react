import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from "../pages/dashboard-page";
import LmsPages from "../pages/lms-pages";
import LoginPage from "./../pages/login/login-page";
import Error from "../pages/error-page";
import RegisterPage from "./../pages/register/register-pages";
import { AuthProvider } from "../shared/auth/auth-context";

export default function AppRouter() {
  return (
    
    <Router>
      <AuthProvider>
        <Switch>
           <Route exact path="/"component={LmsPages}/>
           <Route path="/register"component={RegisterPage}/>
           <Route path="/dash"component={Dashboard}/>
           <Route path="/admin"component={LoginPage}/>
           <Route path="*"component={Error}/>
        </Switch>
        </AuthProvider>
    </Router>
    
  );
}