import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { apiEditComment } from '../actions/product.actions';


function EditComment({commentId, showEditComment, setShowEditComment}) {
  
  const [comment, setComment] = useState("");
  const {productComments} = useSelector((state) =>  state.product);
  const {user} = useSelector((state) => state.auth)
  const {productId} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("called edit comment comment");
    if(productComments.length > 0){
        const gotComment = productComments.find((el) => el._id === commentId);
        setComment(gotComment.comment);
    }
    
  }, [showEditComment])

  const handleClose = () => {
      setComment("");
      setShowEditComment(false)};
  const handleEditComment = () => {
    dispatch(apiEditComment(commentId, {comment, userId: user._id, productId}));
    handleClose();
  }
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={showEditComment} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
           
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
          <Button variant="primary" onClick={handleEditComment}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditComment;