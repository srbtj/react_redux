import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
import {Actions} from './actions';
import {Reducers} from './reducers';


let store = createStore(Reducers);

console.log( 'init state: ', store.getState());

store.dispatch(Actions.addTodo('这是测试文件'));

console.log( 'finish state: ', store.getState());

class App extends Component {

  constructor(props){

    super(props);

    this.state = {

    }
  }

  componentDidMounted(){


  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
