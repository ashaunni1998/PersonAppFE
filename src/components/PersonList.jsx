import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner, Button, Modal, Form } from "react-bootstrap";

const PersonList = () => {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState({ id: "", name: "", dob: "" });

  useEffect(() => {
    fetchPersons();
  }, []);

  const fetchPersons = async () => {
    try {
      const response = await axios.get("http://localhost:8089/api/persons");
      setPersons(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching persons:", error);
      setError("Failed to load persons");
      setLoading(false);
    }
  };

  
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this person?")) {
      try {
        await axios.delete(`http://localhost:8089/api/persons/${id}`);
        setPersons(persons.filter((person) => person.id !== id)); 
        alert("Person deleted successfully!");
      } catch (error) {
        console.error("Error deleting person:", error);
        alert("Failed to delete person.");
      }
    }
  };

  
  const handleEdit = (person) => {
    setSelectedPerson(person);
    setShowEditModal(true);
  };


  const handleChange = (e) => {
    setSelectedPerson({ ...selectedPerson, [e.target.name]: e.target.value });
  };

  
  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8089/api/persons/${selectedPerson.id}`, selectedPerson);
      setShowEditModal(false);
      fetchPersons(); 
      alert("Person updated successfully!");
    } catch (error) {
      console.error("Error updating person:", error);
      alert("Failed to update person.");
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" />
        <h4 className="ms-3 text-primary">Loading persons...</h4>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-danger mt-5">
        <h3>⚠ {error}</h3>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary fw-bold">👥 Persons List</h2>
      {persons.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-hover table-bordered shadow-lg mt-3">
            <thead className="table-primary text-center">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {persons.map((person) => (
                <tr key={person.id} className="text-center">
                  <td className="fw-bold">{person.id}</td>
                  <td className="fw-semibold">{person.name}</td>
                  <td>{person.dob}</td>
                  <td>
                    <Button
                      variant="warning"
                      className="me-2"
                      size="sm"
                      onClick={() => handleEdit(person)}
                    >
                      ✏ Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(person.id)}
                    >
                      🗑 Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-warning fs-5 mt-3">
          <i className="bi bi-exclamation-triangle"></i> No persons found.
        </p>
      )}

      {/* Edit Person Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Person</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={selectedPerson.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={selectedPerson.dob}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PersonList;
