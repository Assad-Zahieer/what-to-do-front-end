import React, { Component } from "react";
// import { arrayExpression } from "@babel/types";
import {CONNECTION} from './constants.js';


export default class Completed extends Component {



removeTask = () =>{
    let id = this.props.id;
    let URL =`/api/v1/items/` + id;
    let delly = new XMLHttpRequest();
    delly.open('DELETE', URL);
    delly.onload = () => {
        this.props.getTask();
    }
    delly.send();


}


changeStatusToUncomplete = () => {
    let id = this.props.id;
    let URL =`/api/v1/items/` + id;
    let toUncompleted = new XMLHttpRequest();
    toUncompleted.open('PUT', URL)
    toUncompleted.setRequestHeader("Content-Type", "application/json");
    toUncompleted.setRequestHeader("Accept", "application/json");
    toUncompleted.onload=()=>{
        this.props.getTask();
    }
    
    toUncompleted.send(JSON.stringify({
        "item_id": id,
        "item": this.props.item,
        "status": true
    }));

}



    render() {
        
        return (

            <div className="container col-sm-12">
             <div className="row">
             <div className="col-8">
             <p id = {this.props.id}>
                Item:  {this.props.item}

                </p>
             </div>
             <div className="col">
             <button className="btn btn-dark" type ="button" onClick={this.removeTask}>✗ </button>
          <button className="btn btn-light" type="button" onClick={this.changeStatusToUncomplete}>Restore</button>
      
             </div>
             
             </div>      
            </div>
            
        )
    }

}
