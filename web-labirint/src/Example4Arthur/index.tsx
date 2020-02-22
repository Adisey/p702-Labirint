// Core
import React, { Component } from "react";
// Components
import { Block } from "./Components";
// Store
import { Provider } from "mobx-react";
import ListStore from "./store/ListStore";

const listStore = new ListStore();

export default class Example4Arthur extends Component {
  render() {
    return (
      <Provider ListStore={listStore}>
        <Block aaa={"asdasds"} />
      </Provider>
    );
  }
}
