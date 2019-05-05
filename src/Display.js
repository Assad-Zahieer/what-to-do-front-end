import React, { Component } from "react";
// import { arrayExpression } from "@babel/types";


export default class Display extends Component {



removeTask = (e) =>{
    let id = e.target.className;
    let URL ="http://localhost:8080/api/v1/items/" + id;
    let delly = new XMLHttpRequest();
    delly.open('DELETE', URL);
    delly.onload = () => {
        this.props.getTask();
    }
    delly.send();


}

changeStatusToCompleted = (f) => {
    let id = f.target.className;
    let URL ="http://localhost:8080/api/v1/items/" + id;
    let toCompleted = new XMLHttpRequest();
    toCompleted.open('PUT', URL)
    toCompleted.setRequestHeader("Content-Type", "application/json");
    toCompleted.setRequestHeader("Accept", "application/json");
    toCompleted.onload=()=>{
        this.props.getTask();
    }
    
    toCompleted.send(JSON.stringify({
        "item_id": id,
        "item": this.props.item,
        "status": false
    }));

}


    render() {
        
        return (

            
            <div>

                <p id = {this.props.id}>
                Item:  {this.props.item}

                

                </p>
             
          <button className={this.props.id} type ="button" onClick={this.removeTask}>Remove</button>
          <button className={this.props.id} type="button" onClick={this.changeStatusToCompleted}>Done</button>
      

                
                
            </div>
            
        )
    }

}