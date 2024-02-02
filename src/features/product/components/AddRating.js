import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { CDBRating } from 'cdbreact';
import { useDispatch, useSelector } from 'react-redux';
import { apiAddRating } from '../actions/product.actions';
import { useParams } from 'react-router-dom';

function AddRating({showAddRating, setShowAddRating}) {
  

  const handleClose = () => {
    setRating("");
    setFeedback("");
    setShowAddRating(false)
  };
  const {user} = useSelector((state) => state.auth);
  const {productId} = useParams();
  const [rating, setRating] = useState("");
  const [feedback, setFeedback] = useState("");
  const dispatch = useDispatch();
  const handleAddRating = () => {
    dispatch(apiAddRating({
      star: rating,
      desc:feedback,
      userId:user._id,
      productId
    }))
    handleClose();
  }


  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={showAddRating} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Rating</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group> */}
            <CDBRating feedback={false} getValue={(e) => {
             setRating(e.title)
            }}/> 
            <h4>{rating}</h4>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Write Desc</Form.Label>
              <Form.Control as="textarea" rows={3} value={feedback} onChange={(e) => {setFeedback(e.target.value)}}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddRating}>
            Add Rating
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddRating;