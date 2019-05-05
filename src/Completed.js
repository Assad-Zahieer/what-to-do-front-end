import React, { Component } from "react";
// import { arrayExpression } from "@babel/types";


export default class Completed extends Component {



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


changeStatusToUncomplete = (f) => {
    let id = f.target.className;
    let URL ="http://localhost:8080/api/v1/items/" + id;
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

            
            <div>
                
             
                <p id = {this.props.id}>
                Item:  {this.props.item}

                

                </p>
             
          <button className={this.props.id} type ="button" onClick={this.removeTask}>Remove</button>
          <button className={this.props.id} type="button" onClick={this.changeStatusToUncomplete}>Restore</button>
      

                
                
            </div>
            
        )
    }

}