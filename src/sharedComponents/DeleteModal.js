
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteModal({showDeleteModal, setShowDeleteModal, onDelete, body}) {

  const handleClose = () => setShowDeleteModal(false);

  return (
    <>
      

      <Modal
        show={showDeleteModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {body}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => {onDelete();handleClose();}}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;