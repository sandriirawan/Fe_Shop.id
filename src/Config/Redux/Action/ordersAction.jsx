import axios from "axios";

const getOrder = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_KEY}/order`);
      const orders = response.data.data;
      console.log(orders)
      dispatch({ type: "GET_ALL_ORDER", payload: orders });
    } catch (error) {
      console.error(error.message);
    }
  };
};

export default getOrder;
