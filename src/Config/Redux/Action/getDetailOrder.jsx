import axios from 'axios';

export const getOrderDetail = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_KEY}/order/${id}`);
    if (response.data && response.data.length > 0) {
      const order = response.data[0];
      dispatch({ type: "GET_DETAIL_ORDER", payload: order });
    } else {
      console.error('No order data found');
    }
  } catch (error) {
    console.error(error);
  }
};
