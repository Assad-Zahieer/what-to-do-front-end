//chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
import React, { Component } from 'react';
import Input from './Input.js'
import Display from './Display.js';
import Completed from './Completed.js';
import Navbar from './navbar.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemList: []

    }
  }

  getTask = () => {

    let URL = "http://localhost:8080/api/v1/items"
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
      <html>

        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        </head>

        <body>

        <Navbar />

        <Input getTask={this.getTask} />

        <h3>To do ...</h3>
        {this.state.itemList.filter(items => items.status === true)
          .map((items, i) =>
            <Display key={i} item={items.item} id={items.item_id} status={items.status}
              getTask={this.getTask}
            />
          )
        }

        <h3>Done</h3>
        {this.state.itemList.filter(items => items.status === false)
          .map((items, i) =>

            <Completed key={i} item={items.item} id={items.item_id} status={items.status}
              getTask={this.getTask}
            />
          )
        }

        </body>

        


      </html>

    )
  }
}

export default App;