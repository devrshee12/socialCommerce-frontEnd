
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Comments from './Comments';
import Ratings from './Ratings';
import AddComment from './AddComment';
import AddRating from './AddRating';

function ReviewProduct() {
    const [tab, setTab] = useState("comments");

    const [showAddComment, setShowAddComment] = useState(false);
    const [showAddRating, setShowAddRating] = useState(false);

    const handleAdd = () => {
        if(tab === "comments"){
            setShowAddComment(true);
        }
        if(tab === "ratings"){
            setShowAddRating(true);
        }
    }
    
  return (
    <Card>
      <Card.Header>
        <div style={{display:"flex", justifyContent:"space-between"}}>

        <Nav variant="pills" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#first" onClick={() => {setTab("comments")}}>Comments</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link" onClick={() => {setTab("ratings")}}>Ratings</Nav.Link>
                    </Nav.Item>
        </Nav>

        <button type="button" class="btn btn-outline-primary" onClick={handleAdd}> + Add {tab.slice(0, tab.length - 1)}</button>
        </div>
        <AddComment showAddComment={showAddComment} setShowAddComment={setShowAddComment}/>
        <AddRating showAddRating={showAddRating} setShowAddRating={setShowAddRating} />
      </Card.Header>
      <Card.Body>
        {
            tab === "ratings" ? <Ratings/>:<Comments/>
        }
        
        {/* <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default ReviewProduct;