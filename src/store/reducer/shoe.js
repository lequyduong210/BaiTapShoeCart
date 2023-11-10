import { shoeArr } from "./../../data";
import {
  HANDLE_CART,
  HANDLE_REMOVE,
  INCREASE_QUANTITY,
  VIEW_DETAIL,
} from "./../../constant/shoe";

let initialState = {
  shoeArr: shoeArr,
  detail: shoeArr[0],
  cart: [],
};

export let shoeReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_DETAIL: {
      state.detail = action.payload;
      return { ...state };
    }
    case HANDLE_CART: {
      let newCart = [...state.cart];
      const index = newCart.findIndex(
        (value) => value.id === action.payload.id
      );
      if (index !== -1) {
        newCart[index].cartQuantity += 1;
      } else {
        newCart = [...state.cart, { ...action.payload, cartQuantity: 1 }];
      }
      return { ...state, cart: newCart };
    }
    case HANDLE_REMOVE: {
      let newCart = [...state.cart].filter((item) => {
        return item.id != action.payload;
      });
      return { ...state, cart: newCart };
    }
    case INCREASE_QUANTITY: {
      const newCart = [...state.cart];
      const index = newCart.findIndex((value) => value.id === action.id);
      if (index !== -1) {
        newCart[index].cartQuantity =
          newCart[index].cartQuantity + action.quantity || 1;
      }
      return { ...state, cart: newCart };
    }
    default:
      return state;
  }
};
