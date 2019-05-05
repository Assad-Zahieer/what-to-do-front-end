import React, {Component} from "react";

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
        let URL = "http://localhost:8080/api/v1/items"
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
                <div id = "tasks">
                    <input type = "text" id ="myText" placeholder="Enter task" onChange = {this.addItem} value= {this.state.item}/>
                    <button type ="button" onClick = {this.sendItem} > Add Task</button>
                    

                    

                </div>
            </form>
        )
    }
}