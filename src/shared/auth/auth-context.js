import React, { Component } from 'react'
import {auth} from "../../utils/firebase"
// creat authContext from react
const AuthContext= React.createContext();

export  class AuthProvider extends Component {
    constructor(props){
        super(props);
        this.state={
            currentUser:{}
        }
    }

    login=()=>{
     alert("login")

    }


    registerFireBase=(email,password)=>{
      return auth.createUserWithEmailAndPassword(email,password);
    }


    logout=()=>{
        alert("logout")
    }







    render() {
        return (
            <AuthContext.Provider value={
                {
                    currentUser:this.props.currentUser,
                    login:this.login,
                    logout:this.logout,
                    registerFireBase:this.registerFireBase,
              }
            }>
              {this.props.children}
            </AuthContext.Provider>
        )
    }
}
export default AuthContext;