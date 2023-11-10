import React, { Component } from "react";
import { connect } from "react-redux";

class Shoe_Detail extends Component {
  render() {
    const { detail } = this.props;
    return (
      <div className="container">
        <img src={detail.image} alt="" />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    detail: state.detail,
  };
};
export default connect(mapStateToProps)(Shoe_Detail);
