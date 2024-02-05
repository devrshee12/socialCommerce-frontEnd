import Card from 'react-bootstrap/Card';
import EditRating from './EditRating';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiDeleteRating } from '../actions/product.actions';
import DeleteModal from '../../../sharedComponents/DeleteModal';
import { timeAgo } from '../../../utils/utils';

function SpecificRating({rating}) {
  const {user} = useSelector((state) => state.auth);
  const [showEditRating, setShowEditRating] = useState(false);
  const [showDeleteRating, setShowDeleteRating] = useState(false);
  const dispatch = useDispatch()

  const onEdit = () => {
    setShowEditRating(true);
  }

  const onDelete = () => {
    setShowDeleteRating(true)
  }

  const handleDelete = () => {
    dispatch(apiDeleteRating(rating._id));
  }

  return (
    <Card style={{marginTop:"20px"}}>
       <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Card.Header style={{ border: "none", fontWeight: "bold" }}>
            {rating.userId.name}
            {rating.userId.role === "admin" ? ` (admin)` : ""}
          </Card.Header>
        </div>
        {rating.userId._id === user._id && (
          <div
            style={{
              marginRight: "280px",
              display: "flex",
              height: "40px",
              width: "15%",
              justifyContent: "space-between",
              marginTop: "5px",
            }}
          >
            <button type="button" class="btn btn-outline-info" onClick={onEdit}>
              Edit
            </button>
            <button
              type="button"
              class="btn btn-outline-danger"
              onClick={onDelete}
            >
              Delete
            </button>
            <EditRating
              ratingId={rating._id}
              showEditRating={showEditRating}
              setShowEditRating={setShowEditRating}
            />
            <DeleteModal
              body={`Are you sure you want to DELETE the rating`}
              onDelete={handleDelete}
              setShowDeleteModal={setShowDeleteRating}
              showDeleteModal={showDeleteRating}
            />
          </div>
        )}
      </div>
      <hr style={{ marginBottom: "10px" }} />
      <Card.Body>
        <blockquote className="blockquote mb-0">
            <h4>{rating.star}</h4>
          <p>
            {' '}
            {rating.desc}{' '}
          </p>
          
          <footer className="blockquote-footer" style={{fontSize:"12px"}}>
          {timeAgo(rating?.updatedAt)}
            {/* 30 mini <cite title="Source Title">Source Title</cite> */}
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default SpecificRating;