import React, { Component } from "react";
// import { arrayExpression } from "@babel/types";


export default class Display extends Component {
    state = {
        bool: true,
        id: "",
        updateItem: "",
    }



    removeTask = (e) => {
        let id = e.target.className;
        let URL = "http://localhost:8080/api/v1/items/" + id;
        let delly = new XMLHttpRequest();
        delly.open('DELETE', URL);
        delly.onload = () => {
            this.props.getTask();
        }
        delly.send();


    }

    changeStatusToCompleted = (f) => {
        let id = f.target.className;
        let URL = "http://localhost:8080/api/v1/items/" + id;
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

    addUpdatedItem = (e) =>{
        this.setState({
            updateItem:e.target.value
        })
    }

    submitUpdate = () => {

        let URL = "http://localhost:8080/api/v1/items/" + this.props.id;
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

        if(this.state.bool === true){
            return (
                <div>
    
                    <p id={this.props.id}>
                        Item:  {this.props.item}
                 </p>
    
                    <button className={this.props.id} type="button" onClick={this.removeTask}>Remove</button>
                    <button className={this.props.id} type="button" onClick={this.changeStatusToCompleted}>Done</button>
                    <button className={this.props.id} type="button" onClick={this.editItems} >Edit</button>
                </div>
    
            )
        }
        else{
            return(
                <div>
                <input type ="text"  className="form-control" id="update" placeholder="Enter task" onChange={this.addUpdatedItem} value={this.state.updateItem}/>
                <button type="button" onClick={this.submitUpdate} >Add</button>
            </div>
            )
        }
          
        
    }

}