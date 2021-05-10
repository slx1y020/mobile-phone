import React, { Component } from "react";
import Tabbar from "../../components/tabbar";
export default class Cart extends Component {
  render() {
    return (
      <div>
        Cart
        <Tabbar {...this.props} />
      </div>
    );
  }
}
