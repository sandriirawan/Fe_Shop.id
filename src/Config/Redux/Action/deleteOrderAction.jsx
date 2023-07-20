import axios from "axios";
const deleteOrder = (id) => async (dispatch) => {
  try {
    const orders = await axios.delete(
      `${process.env.REACT_APP_API_KEY}/order/${id}`
    );
    console.log(orders);
    const result = orders.data.data;
    dispatch({ type: "DELETE_ORDER", payload: result });
  } catch (err) {
    console.error(err.message);
    alert("delete failed");
  }
};

export default deleteOrder;