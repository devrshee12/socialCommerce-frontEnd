import Card from 'react-bootstrap/Card';

function SpecificRating({rating}) {
  return (
    <Card style={{marginTop:"20px"}}>
      <Card.Header>{rating.userId.name}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
            <h4>{rating.star}</h4>
          <p>
            {' '}
            {rating.desc}{' '}
          </p>
          
          <footer className="blockquote-footer" style={{fontSize:"12px"}}>
            30 minutes ago
            {/* 30 mini <cite title="Source Title">Source Title</cite> */}
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default SpecificRating;