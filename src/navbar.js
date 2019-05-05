import React, { Component } from "react";
import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
                <nav className="navbar" id="navbar">
                    <h1>What To Do...</h1>
                    <img src="https://image.flaticon.com/icons/svg/126/126472.svg" alt="Settings"></img>
                </nav>
        )
    }
}
