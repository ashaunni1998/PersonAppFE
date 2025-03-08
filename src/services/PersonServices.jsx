import axios from "axios";

const API_BASE_URL = "http://localhost:8089/api/persons";

const PersonService = {
  
  getAllPersons: async () => {
    try {
      const response = await axios.get("http://localhost:8089/api/persons");
      return response.data;
    } catch (error) {
      console.error("Error fetching persons:", error);
      throw error;
    }
  },


  addPerson: async (person) => {
    try {
      const response = await axios.post("http://localhost:8089/api/persons", person);
      return response.data;
    } catch (error) {
      console.error("Error adding person:", error);
      throw error;
    }
  },

  
  deletePerson: async (id) => {
    try {
      await axios.delete(`${"http://localhost:8089/api/persons"}/${id}`);
    } catch (error) {
      console.error("Error deleting person:", error);
      throw error;
    }
  },


  updatePerson: async (id, updatedPerson) => {
    try {
      const response = await axios.put(`${"http://localhost:8089/api/persons"}/${id}`, updatedPerson);
      return response.data;
    } catch (error) {
      console.error("Error updating person:", error);
      throw error;
    }
  }
};

export default PersonService;
