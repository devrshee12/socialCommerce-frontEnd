import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { timeAgo } from "../../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import EditComment from "./EditComment";
import DeleteModal from "../../../sharedComponents/DeleteModal";
import { apiDeleteComment } from "../actions/product.actions";

function SpecificComment({ comment }) {
  const { user } = useSelector((state) => state.auth);
  const [showEditComment, setShowEditComment] = useState(false);
  const [showDeleteComment, setShowDeleteComment] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("specific comment called : ", comment);
  }, []);

  const onEdit = () => {
    setShowEditComment(true);
  };

  const onDelete = () => {
    setShowDeleteComment(true);
  };

  const handleDelete = () => {
    dispatch(apiDeleteComment(comment._id));
  };

  return (
    <Card style={{ marginTop: "20px" }}>
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
            {comment.userId.name}
            {comment.userId.role === "admin" ? ` (admin)` : ""}
          </Card.Header>
        </div>
        {comment.userId._id === user._id && (
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
            <EditComment
              commentId={comment._id}
              showEditComment={showEditComment}
              setShowEditComment={setShowEditComment}
            />
            <DeleteModal
              body={`Are you sure you want to DELETE the comment`}
              onDelete={handleDelete}
              setShowDeleteModal={setShowDeleteComment}
              showDeleteModal={showDeleteComment}
            />
          </div>
        )}
      </div>
      <hr style={{ marginBottom: "10px" }} />
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p> {comment.comment} </p>
          <footer className="blockquote-footer" style={{ fontSize: "12px" }}>
            {timeAgo(comment?.updatedAt)}
            {/* 30 mini <cite title="Source Title">Source Title</cite> */}
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default SpecificComment;
