import React, { Component } from "react";
import Cavis from "./Cavis";
import Header from "./Header";



export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header/>
        <Cavis/>
      </div>
    );
  }
}
