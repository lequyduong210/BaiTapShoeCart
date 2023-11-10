import React, { Component } from "react";
import { connect } from "react-redux";
import Shoe_Item from "./Shoe_Item";

class Shoe_List extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="row">
        {list.map((item, index) => {
          return <Shoe_Item shoe={item} key={index} />;
        })}
      </div>
    );
  }
}

let mapSateToProps = (state) => {
  return {
    list: state.shoeArr,
  };
};
export default connect(mapSateToProps)(Shoe_List);
