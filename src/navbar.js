import React, { Component } from "react";
import './Navbar.css';
import {CONNECTION} from './constants.js';

export default class Navbar extends Component {
constructor(props){
  super(props);
  this.state={
    email: this.props.email,
    password: this.props.password,
    confirmPassword: this.props.password,
    bool2: true
  }
}

addEmail = (e) => {
  this.setState({
    email: e.target.value
  })
}

addPassword = (f) => {
  this.setState({
    password: f.target.value
  })
}

confirmPass = (g) => {
  this.setState({
    confirmPassword: g.target.value
  })
}

sendDetails = () => {
  
    let URL = `http://${CONNECTION}:8080/api/v2/users`
    let postty = new XMLHttpRequest();
    postty.open('POST', URL, true);
    postty.setRequestHeader("Content-Type", "application/json");
    postty.setRequestHeader("Accept", "application/json");
    postty.onload=()=>{
    }
    
    postty.send(JSON.stringify({
      "email": this.state.email,
      "password" : this.state.password
    }));
  
    this.setState({
        email: "",
        password : ""
    })
 
}
  
  
  
  render() {
      return (
        <nav className="navbar" id="navbar">
            <h1>What To Do...</h1>
       
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Sign Up
      </button>
      
      
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <p>Email</p>
            <input type = "email" className="form" id="email" placeholder="Enter email" onChange={this.addEmail} value={this.state.email}/>
            </div>
            <div className="modal-body">
            <p>Password</p>
            <input type = "password" className="form" id="password" placeholder="Enter password" onChange={this.addPassword} value={this.state.password}/>
            </div>
            <div className="modal-body">
            <p>Confirm Password</p>
            <input type = "password" className="form" id="password1" placeholder="Enter password" onChange={this.confirmPass} value={this.state.confirmPassword}/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={this.sendDetails}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
      </nav>
      
)

     
    }

    

    
}
