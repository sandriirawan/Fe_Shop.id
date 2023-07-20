import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from "react-redux";
import deleteProduct from "../../Config/Redux/Action/deleteProductAction"
import swal from 'sweetalert';


function ModalDeleted({id, children}) {

  const dispatch =  useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = () => {
    dispatch(deleteProduct(id,setShow))
    swal({
      title: "delete succed",
      text: 'You clicked the button!',
      icon: 'success',
      button: 'OK',
    })
    
  };

  return (
    <>
    <Button className="btn btn-danger" onClick={handleShow}>
    {children}
    </Button>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title >Delete Product</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleDelete}>
      <Modal.Body>
        <h4 classname="text-center">yakin mau hapus dek?</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <button type="submit" className="btn btn-danger">{children}</button>
      </Modal.Footer>
      </form>
    </Modal>
  </>
  );
}

export default ModalDeleted;


         