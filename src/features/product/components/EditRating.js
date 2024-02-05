import React,{ useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { CDBRating } from 'cdbreact';
import { useDispatch, useSelector } from 'react-redux';
import {  apiEditRating } from '../actions/product.actions';
import { useParams } from 'react-router-dom';

function EditRating({ratingId, showEditRating, setShowEditRating}) {
  

  const handleClose = () => {
    setShowEditRating(false)
  };
  const {user} = useSelector((state) => state.auth);
  const {productId} = useParams();
  const [rating, setRating] = useState("");
  const [feedback, setFeedback] = useState("");
  const dispatch = useDispatch();
  const {productRatings} = useSelector((state) => state.product);
  useEffect(() => {
    if(productRatings.length > 0){
        const gotRating = productRatings.find((el) => el._id === ratingId);
        setRating(gotRating.star)
        setFeedback(gotRating.desc)
    }
  }, [showEditRating])

  const handleEditRating = () => {
    dispatch(apiEditRating(ratingId, {
      star: rating,
      desc:feedback,
      userId:user._id,
      productId
    }))
    handleClose();
  }


  return (
    <>
      

      <Modal show={showEditRating} onHide={handleClose}>
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
          <Button variant="primary" onClick={handleEditRating}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditRating;