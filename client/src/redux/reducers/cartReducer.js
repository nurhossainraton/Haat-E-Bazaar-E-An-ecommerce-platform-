import * as actionType from "../constants/cartConstant";

export const cartReducer = (state = { cartItems: [] }, action) => {
  

  switch (action.type) {
    case actionType.ADD_TO_CART:

      console.log("action.payload", action.payload);
      const item = action.payload;
      console.log("item", item);
      const existItem = state.cartItems.find((x) => x.id === item.id);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload),
      };
    case actionType.ADD_TO_CART_ERROR:
      console.log("action.payload", action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
