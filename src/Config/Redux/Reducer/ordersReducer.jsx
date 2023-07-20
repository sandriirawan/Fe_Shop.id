const initialState = {
    order: [],
    orderDetail: [],
  };
  
  const orderReducer = (state = initialState, action) => {
    if (action.type === "GET_ALL_ORDER") {
      return {
        ...state,
        order: action.payload,
      };
    } else if (action.type === "GET_DETAIL_ORDER") {
      return {
        ...state,
        orderDetail: [action.payload],
      };
    } else if (action.type === "CREATE_ORDER") {
      return state;
    } else if (action.type === "UPDATE_ORDER") {
      return state;
    } else if (action.type === "DELETE_ORDER") {
      return state;
    } else {
      return state;
    }
  };
  
  export default orderReducer;
  