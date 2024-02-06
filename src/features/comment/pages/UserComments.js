import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { timeAgo } from '../../../utils/utils';
import { apiGetUserComments } from '../actions/comment.action';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const UserComments = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector((state) => state.auth);
    const [page, setPage] = useState(1);
    const searchRef = useRef();
    const {gettingUserComments,userComments, getUserCommentsError, totalPages} = useSelector((state) => state.comment);
    useEffect(() => {
        dispatch(apiGetUserComments(user._id, "", "comment", "desc", page, 5))
    }, [page])

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(apiGetUserComments(user._id, searchRef.current.value, "comment", "desc", page, 5))
    }

    
    if(getUserCommentsError){
        return <div>Error: {getUserCommentsError}</div>
    }

    const handleDecPage = () => {
        if(page - 1 >= 1){
            setPage(page - 1);
        }
    }

    const handleIncPage = () => {
        if(page + 1 <= totalPages){
            setPage(page + 1);
        }
    }

    
    
  return (
    <>
        <div style={{fontWeight:"bold", marginLeft:"45px", fontSize:"30px"}}>User Comments</div>
        <Form className="d-flex" style={{marginLeft:"30px", marginTop:"20px"}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 rounded-pill"
              aria-label="Search"
              style={{border:"2px solid #D1D1D1"}}
              ref={searchRef}
              name='search'
              onKeyDown={(e) => {
                if(e.key === "Enter"){
                    handleSearch(e);
                }
              }}
            />
            <Button className="rounded-pill" variant="outline-primary" onClick={(e) => handleSearch(e)} >
              Search
            </Button>
        </Form>
        
        <div style={{marginLeft:"30px", marginTop:"50px", border:"2px solid #D1D1D1"}}>
        <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Product Name</th>
          <th scope="col">Comment</th>
          <th scope="col">Product Price</th>
          <th scope="col">Product Quantity</th>
          <th scope="col">Comment time</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {
         gettingUserComments ? <div>Loading...</div> :
            userComments?.length > 0 ? 
            userComments.map((comment, idx) => {
            return (<tr className={`table-${idx%2 == 0 ? "primary": "secondary"}`}>
                <td>{(5*(page - 1)) + (idx + 1)}</td>
                <td>{comment?.productId.name}</td>
                <td>{comment.comment}</td>
                <td>{comment?.productId?.price}</td>
                <td>{comment?.productId?.quantity}</td>
                <td>{timeAgo(comment?.updatedAt)}</td>
                <td className='view' onClick={() => {navigate(`/product/${comment?.productId._id}`)}}>View</td>
            </tr>)
            })
        :<div>No user Comments found</div>
            
        }
        </tbody>
    </table>
    <ul class="pagination">
    <li class={`page-item`} onClick={handleDecPage}>
      <a class="page-link"  >&laquo;</a>
    </li>
    {
        Array(totalPages).fill(null).map((u, i) => {
            return (<li class={`page-item ${i + 1 === page ? "active":""}`} style={{cursor:"pointer"}} onClick={() => {setPage(i + 1)}}>
                <a class="page-link">{i + 1}</a>
                </li>)
        })
    }
    <li class={`page-item`} style={{cursor:"pointer"}} onClick={handleIncPage}>
      <a class="page-link" href="#">&raquo;</a>
    </li>
  </ul>
    </div>
    
    </>
  )
}

export default UserComments


// 5 * 0 + 1
// 5 * 0 + 2
// 5 * 0 + 3
// 5 * 0 + 4
// 5 * 0 + 5

// 5 * 1 + 1
// 5 * 1 + 2
// 5 * 1 + 3
// 5 * 1 + 4

