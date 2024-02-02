import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { apiAddComment } from '../actions/product.actions';
import { useParams } from 'react-router-dom';


function AddComment({showAddComment, setShowAddComment}) {
  
  const [comment, setComment] = useState("");

  const handleClose = () => {
    setComment("");
    setShowAddComment(false)};
  const {user} = useSelector((state) => state.auth)
  const {productId} = useParams();
  const dispatch = useDispatch();
  const handleAddComment = () => {
    dispatch(apiAddComment({
      comment,
      userId: user._id,
      productId
    }))
    handleClose();
  }
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={showAddComment} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Comment</Modal.Title>
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
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Write Comment</Form.Label>
              <Form.Control as="textarea" rows={3} value={comment} onChange={(e) => {setComment(e.target.value)}}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddComment}>
            Add Comment
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddComment;