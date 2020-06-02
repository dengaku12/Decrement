import React, {Component} from 'react';
import Decrement from "./Decrement";
import './App.css';

class App extends Component{
  render(){
    return(
      <>
        <Decrement start = {12} />
        <Decrement start = {20} />
        <Decrement start = {69} />
      </>
    );
  }
}

export default App;
