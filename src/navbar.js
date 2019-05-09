import React, { Component } from "react";
import './Navbar.css';

export default class Navbar extends Component {
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
                    <input type = "email" className="form" id="email" placeholder="Enter email"/>
                    </div>
                    <div className="modal-body">
                    <input type = "password" className="form" id="password" placeholder="Enter password"/>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
              </nav>
              
        )
    }
}
