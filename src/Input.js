import React, {Component} from "react";
import {CONNECTION} from './constants.js';

export default class Input extends Component{

    constructor(props){
        super(props);
        this.state ={
            item: this.props.item
        }
    }

    addItem = (e) =>{
        this.setState({
            item:e.target.value
        })
    }
    
    sendItem = () => {
        let URL = `/api/v1/items`
        let postty = new XMLHttpRequest();
        postty.open('POST', URL, true);
        postty.setRequestHeader("Content-Type", "application/json");
        postty.setRequestHeader("Accept", "application/json");
        postty.onload=()=>{
            this.props.getTask();
        }
        
        postty.send(JSON.stringify({
            "item": this.state.item
        }));

        this.setState({
            item: ""
        })

    

    }



    render(){
        return(
            <form>
            <div className="form-inline">
            <div className = "form-group mr-2">
                    <input type = "text" className="form-control" id ="myText" placeholder="Enter task" onChange = {this.addItem} value= {this.state.item}/>
                    </div>
                    <div className="form-group mr-2">
                    <button type ="button" className="btn btn-primary" onClick = {this.sendItem} >Add</button>
                    </div>
                   
            </div>
                
                    
                    

                
            </form>
        )
    }
}
