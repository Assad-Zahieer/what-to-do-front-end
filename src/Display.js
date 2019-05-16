import React, { Component } from "react";
// import { arrayExpression } from "@babel/types";
import { CONNECTION } from './constants.js';
import './Display.css';

export default class Display extends Component {
    state = {
        bool: true,
        id: "",
        updateItem: "",
    }



    removeTask = () => {
        let id = this.props.id;
        let URL = `/api/v1/items/` + id;
        let delly = new XMLHttpRequest();
        delly.open('DELETE', URL);
        delly.onload = () => {
            this.props.getTask();
        }
        delly.send();


    }

    changeStatusToCompleted = () => {
        let id = this.props.id;
        let URL = `/api/v1/items/` + id;
        let toCompleted = new XMLHttpRequest();
        toCompleted.open('PUT', URL)
        toCompleted.setRequestHeader("Content-Type", "application/json");
        toCompleted.setRequestHeader("Accept", "application/json");
        toCompleted.onload = () => {
            this.props.getTask();
        }

        toCompleted.send(JSON.stringify({
            "item_id": id,
            "item": this.props.item,
            "status": false
        }));

    }

    editItems = () => {
        this.setState({
            bool: false
        })

    }

    addUpdatedItem = (e) => {
        this.setState({
            updateItem: e.target.value
        })
    }

    submitUpdate = () => {

        let URL = `/api/v1/items/` + this.props.id;
        let toCompleted = new XMLHttpRequest();
        toCompleted.open('PUT', URL)
        toCompleted.setRequestHeader("Content-Type", "application/json");
        toCompleted.setRequestHeader("Accept", "application/json");
        toCompleted.onload = () => {
            this.props.getTask();
        }

        toCompleted.send(JSON.stringify({
            "item_id": this.props.id,
            "item": this.state.updateItem,

        }));
        this.setState({
            bool: true
        })
    }


    render() {

        if (this.state.bool === true) {
            return (
                <div>
                    <div className="container col-sm-12">
                        <div className="row">
                            <div className="col-8">
                                <p id={this.props.id}>
                                    Item:  {this.props.item}
                                </p>
                            </div>
                            <div className="col">
                                <div className="btn-group">
                                    <button className="btn btn-dark"type="button" onClick={this.editItems} > ✎ </button>
                                    <button className="btn btn-light" type="button" onClick={this.changeStatusToCompleted}> ✓ </button>
                                    <button className="btn btn-dark" type="button" onClick={this.removeTask}> ✗ </button>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            )
        }
        else {
            return (
                <div>
                    <input type="text" className="form-control" id="update" placeholder="Enter task" onChange={this.addUpdatedItem} value={this.state.updateItem} />
                    <button type="button" onClick={this.submitUpdate} >Add</button>
                </div>
            )
        }


    }

}
