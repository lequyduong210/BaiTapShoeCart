import React, { Component } from "react";
import { connect } from "react-redux";
import { HANDLE_REMOVE, INCREASE_QUANTITY } from "../constant/shoe";

class Shoe_Cart extends Component {
  totalPrice = (shoe) => {
    const price = this.props.cart.find((value) => value.id === shoe.id);
    return price ? price.price * price.cartQuantity : 0;
  };

  render() {
    let { cart, handleRemove, handleCartQuantity } = this.props;
    console.log("cart", cart);
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>
                  <img width={50} src={item.image} alt="" />
                </td>
                <td>
                  {item.price}$ <br />
                  <span className="text-danger">{this.totalPrice(item)}$</span>
                </td>
                <td className="d-flex justify-content-between">
                  <button
                    onClick={() => {
                      handleCartQuantity(item.id, 1);
                    }}
                    className="btn btn-success"
                  >
                    +
                  </button>
                  {item.cartQuantity}
                  <button
                    onClick={() => {
                      handleCartQuantity(item.id, -1);
                    }}
                    className="btn btn-warning"
                  >
                    -
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleRemove(item.id);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleRemove: (idShoe) => {
      dispatch({
        type: HANDLE_REMOVE,
        payload: idShoe,
      });
    },
    handleCartQuantity: (idShoe, quantity) => {
      dispatch({
        type: INCREASE_QUANTITY,
        id: idShoe,
        quantity: quantity,
      });
    },
  };
};
let mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Shoe_Cart);
