//chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
import React, { Component } from 'react';
import Input from './Input.js'
import Display from './Display.js';
import Completed from './Completed.js';
import Navbar from './navbar.js';
import './App.css';
import {CONNECTION} from './constants.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemList: []

    }
  }

  getTask = () => {

    let URL = `http://${CONNECTION}:8080/api/v1/items`
    let getty = new XMLHttpRequest();
    let response1;
    getty.responseType = "json";
    getty.open('GET', URL);
    getty.setRequestHeader("Content-Type", "application/json");
    getty.setRequestHeader("Accept", "application/json");
    getty.onload = () => {
      response1 = getty.response;
      this.setState({
        itemList: response1
      })

    }

    getty.send();
  }

  componentDidMount() {
    this.getTask();

  }


  render() {
    return (

      

        <div>

        <Navbar/>

       


        <div className ="container col-sm-12">
        <div className="row">
        <div className="col"></div>
        <div className ="col-5" id="Input">
        <Input getTask={this.getTask} />
        </div>
        <div className="col"></div>
        </div>
        
        

<h3>To do ...</h3>
{this.state.itemList.filter(items => items.status === true)
  .map((items, i) =>
    <Display key={i} item={items.item} id={items.item_id} status={items.status}
      getTask={this.getTask}
    />
  )
}
<div className="done">
<h3>Done</h3>
{this.state.itemList.filter(items => items.status === false)
  .map((items, i) =>

    <Completed key={i} item={items.item} id={items.item_id} status={items.status}
      getTask={this.getTask}
    />
  )
}
</div>

        </div>
        </div>
 

    )
  }
}

export default App;