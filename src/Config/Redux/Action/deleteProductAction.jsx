import axios from "axios";

const deleteProduct = (id, setShow) => async (dispatch) => {
  try {
    const products = await axios.delete(`${process.env.REACT_APP_API_KEY}/products/${id}`);
    console.log(products);
    setShow(false);
    const result = products.data.data;
    dispatch({ type: "DELETE_PRODUCT", payload: result });
  } catch (err) {
    console.error(err.message);
    alert("Delete failed");
    setShow(false);
  }
};

export default deleteProduct;
