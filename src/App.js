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
      itemList: [],
      userID: this.props.userID,
      email: this.props.email,
    password: this.props.password
    

    }
    
  }

  getTask = () => {

    let URL = `/api/v1/items`
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
    this.setState({
      userID:this.state.userID
    })

  }
  addEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }
  addPassword = (f) => {
    this.setState({
      password: f.target.value
    })
  }
  loginCheck = () => {

    if(this.state.email === "" || this.state.password ===""){

    }else{
      let URL = `/api/v2/users/` + this.state.email + `/` + this.state.password
      let getty = new XMLHttpRequest();
      let validation;
      getty.responseType = "json";
      getty.open('GET', URL);
      getty.setRequestHeader("Content-Type", "application/json");
      getty.setRequestHeader("Accept", "application/json");
      getty.onload = () => {
        validation = getty.response;
        console.log(validation);
        this.setState({
          email: "",
          password : "",
          userID: validation
        })
        console.log(this.state);
        console.log(typeof this.state.userID)
    
      }
    
      getty.send();
    }

  }

  logout = () => {
      this.setState({
        email: "",
        password : "",
        userID: undefined
      })
      
  
    }
  
  


  render() {
    
    
    if(this.state.userID === undefined || this.state.userID === 0){
return(
  <div>
  <Navbar userID={this.props.userID}/>
  <form className="box" action="index.html" method="post">
  <h1>Login</h1>
  <input type="email" id="loginEmail" placeholder="Email" onChange={this.addEmail} value={this.state.email}/>
  <input type="password"id="loginPassword" placeholder="Password" onChange={this.addPassword} value={this.state.password}/>
  <input type="button" className="btn btn-primary" value="Login" onClick={this.loginCheck} />
</form>
  </div>

)      

    }else{
      return (

      

        <div>

        <Navbar userID = {0} logout={this.logout}/>

  


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
    
}

export default App;
