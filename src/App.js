import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import RouteMap from "./route/index";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <RouteMap />
      </BrowserRouter>
    );
  }
}
