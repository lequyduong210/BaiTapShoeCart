import React, { Component } from "react";
import Shoe_Cart from "./Shoe_Cart";
import Shoe_List from "./Shoe_List";
import Shoe_Detail from "./Shoe_Detail";

export default class Shoe_Layout extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6">
            <Shoe_Cart />
          </div>
          <div className="col-6">
            <Shoe_List />
          </div>
        </div>
        <div className="col-6">
          <Shoe_Detail />
        </div>
      </div>
    );
  }
}
