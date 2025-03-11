import React, { useState } from "react";
import axios from "axios";
import { Toast, ToastContainer, Card, Form, Button, Container } from "react-bootstrap";

const AddPerson = () => {
  const [person, setPerson] = useState({ name: "", dob: "" });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState("success");

  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
<<<<<<< HEAD
      await axios.post("http://localhost:8089/api/persons", person); // Corrected API URL
=======
      await axios.post("http://localhost:8081/api/persons", person); // Corrected API URL
>>>>>>> face7bb (first commit)
      setToastMessage("Person added successfully!");
      setToastVariant("success");
      setShowToast(true);
      setPerson({ name: "", dob: "" });
    } catch (error) {
      setToastMessage("Failed to add person.");
      setToastVariant("danger");
      setShowToast(true);
      console.error("Error adding person:", error);
    }
  };
   return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      
      <ToastContainer position="top-end" className="p-3">
        <Toast bg={toastVariant} onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
          <Toast.Body className="text-white">{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>

    
      <Card className="shadow-lg p-4 rounded-4" style={{ width: "420px" }}>
        <Card.Body>
          <h2 className="text-center text-primary fw-bold"> Add Person</h2>
          <Form onSubmit={handleSubmit} className="mt-3">
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={person.name}
                onChange={handleChange}
                className="border-primary rounded-3"
                placeholder="Enter name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Date of Birth:</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={person.dob}
                onChange={handleChange}
                className="border-primary rounded-3"
                required
              />
            </Form.Group>

            <Button type="submit" className="w-100 fw-bold rounded-3" variant="primary">
               Add Person
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddPerson;
