import axios from "axios";
import swal from "sweetalert";

const createOrder = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_KEY}/order`, data);
    console.log(response);
    swal({
      title: "Order created",
      text: "You clicked the button!",
      icon: "success",
      button: "OK",
    }).then(() => {
      window.location.href = "/mybag";
    });

    dispatch({ type: "CREATE_ORDER", payload: response.data });
  } catch (error) {
    console.error(error);
    swal({
      title: "Failed to create order",
      text: "You clicked the button!",
      icon: "error",
      button: "OK",
    });
    dispatch({ type: "CREATE_ORDER", payload: error.message });
  }
};

export default createOrder;
