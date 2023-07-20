import axios from "axios";
import swal from 'sweetalert';



const createProduct = (data, saveImage,setShow) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("stock", data.stock);
    formData.append("price", data.price);
    formData.append("photo", saveImage);
    formData.append("description", data.description);
    const products = await axios.post(`${process.env.REACT_APP_API_KEY}/products`, formData ,{
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    console.log(products);
    swal({
      title: "create succed",
      text: 'You clicked the button!',
      icon: 'success',
      button: 'OK',
    }).then(() => {
      window.location.reload(); 
    });

    setShow(false);
    const result = products.data.data;
    dispatch({ type: "CREATE_PRODUCT", payload: result });
  } catch (err) {
    console.error(err.message);
    swal({
      title: "create error",
      text: 'You clicked the button!',
      icon: 'error',
      button: 'OK',
    }).then(() => {
      window.location.reload(); 
    });
    setShow(false);
  }
};

export default createProduct;