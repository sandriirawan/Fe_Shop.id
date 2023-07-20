
import axios from "axios";
import swal from "sweetalert";

// Action untuk memperbarui data pesanan
export const updateOrder = (orderData) => async (dispatch) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_KEY}/order/${orderData.id}`,
      orderData
    );
    console.log(response);
    swal({
      title: "Order updated",
      text: "You clicked the button!",
      icon: "success",
      button: "OK",
    }).then(() => {
      window.location.href = "/mybag";
    });

    dispatch({ type: "UPDATE_ORDER", payload: response.data });
  } catch (error) {
    console.error(error);
    swal({
      title: "Failed to update order",
      text: "You clicked the button!",
      icon: "error",
      button: "OK",
    });
    dispatch({ type: "UPDATE_ORDER", payload: error.message });
  }
};