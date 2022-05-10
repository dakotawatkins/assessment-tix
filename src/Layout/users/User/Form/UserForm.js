import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function UserForm({
  handleSubmit,
  handleCancel,
  users,
  initialState = {
    firstName: "",
    lastName: "",
    createdAt: "",
    id: "",
  },
}) {
  const [formData, setFormData] = useState(initialState);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function dateAndId() {
    let today = new Date().toISOString();
    // console.log(today);
    let newId = users.length + 1;
    // console.log(newId);
    setFormData({
      ...formData,
      createdAt: today,
      id: newId,
    });
  }

  let handleChange = ({ target }) => {
    if (target.name === "people") {
      setFormData({
        ...formData,
        [target.name]: Number(target.value),
      });
    } else {
      setFormData({
        ...formData,
        [target.name]: target.value,
      });
    }
  };

  return (
    <>
      <Button variant="primary" onClick={setShow}>
        Add User
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={handleChange}
                id="firstName"
                name="firstName"
                value={formData.firstName}
                required={true}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={handleChange}
                id="lastName"
                name="lastName"
                value={formData.lastName}
                required={true}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={(e) => {
              e.preventDefault();
              handleCancel();
            }}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(formData);
            }}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
