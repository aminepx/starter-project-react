import React, { Component } from 'react'
import Register from '../../components/register';
import AuthContext from '../../shared/auth/auth-context';
import { auth } from '../../utils/firebase';

export default class RegisterPage extends Component {
  constructor(){
    super();


    this.state={
      firstname:"",
      lastname:"",
      email:"",
      password:"",
      confirmedPassword:""
    }
  }  
  
  
  
  
  
  render() {
        return <Register handleChange = {this.handleChangeInput}
        handleSubmit={this.signUp}
        />;
           
        
    }


    signUp=(event)=>{
      event.preventDefault();
      event.target.reset();
      if(
        this.state.firstname==""||
        this.state.lastname==""||
        this.state.email==""||
        this.state.password==""||
        this.state.confirmedPassword==""

      ){
        alert("veillez remplir tout les champ")
      }
      else if(this.state.confirmedPassword!=this.state.password){
        alert("veillez saisir le meme mot de passe")
      }
      else{
       //utiliser register de authContext
       this.context.registerFireBase(this.state.email,this.state.password).then((response)=>{
         
       }).catch((error)=>{
         alert(error.message)
       })
         
        }
      
      }
      

     


      handleChangeInput = (event)=>{
        let value = event.target.value;
        let input = event.target.name;
  
        this.setState({[input]:value})
  
      }
    }
    //liaison avec authContext
    RegisterPage.contextType=AuthContext;


   
