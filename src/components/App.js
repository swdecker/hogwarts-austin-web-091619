import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsContainer from "./hogcontainer/HogsContainer";
class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          
          < HogsContainer className="ui grid container" hogs={hogs} />

      </div>
    )
  }
}

export default App;
