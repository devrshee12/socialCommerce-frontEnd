import Card from 'react-bootstrap/Card';

function SpecificComment({comment}) {
  return (
    <Card style={{marginTop:"20px"}}>
      <Card.Header>{comment.userId.name}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            {comment.comment}{' '}
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

export default SpecificComment;