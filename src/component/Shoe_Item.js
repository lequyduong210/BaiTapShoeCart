import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_SHOE, HANDLE_CART, VIEW_DETAIL } from "./../constant/shoe";

class Shoe_Item extends Component {
  render() {
    const { shoe, handleClickDetail, handleCart } = this.props;
    return (
      <div className="col-3 card">
        <img className="w-100" src={shoe.image} alt="" />
        <div className="d-flex">
          <button
            onClick={() => {
              handleCart(shoe);
            }}
            className="btn btn-primary"
          >
            Add
          </button>
          <button
            onClick={() => {
              handleClickDetail(shoe);
            }}
            className="btn btn-info"
          >
            View
          </button>
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleClickDetail: (shoe) => {
      dispatch({
        type: VIEW_DETAIL,
        payload: shoe,
      });
    },
    handleCart: (shoe) => {
      dispatch({
        type: HANDLE_CART,
        payload: shoe,
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(Shoe_Item);
