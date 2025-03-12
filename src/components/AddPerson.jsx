import React, { useState } from 'react';
import axios from 'axios';

const AddPerson = () => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8081/api/persons', { name, dob });
        alert('Person added successfully');
    };

    return (
        <div style={styles.container}>
            
            <form onSubmit={handleSubmit} style={styles.form}>
                <input 
                    type="text" 
                    placeholder="Enter Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    style={styles.input}
                />
                <input 
                    type="date" 
                    value={dob} 
                    onChange={(e) => setDob(e.target.value)} 
                    required 
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Add Person</button>
            </form>
        </div>
    );
};

// Inline styles object
const styles = {
    container: {
        maxWidth: '400px',
        margin: '50px auto',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
    },
    heading: {
        color: '#007bff',
        marginBottom: '10px',
    },
    nav: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '20px',
    },
    link: {
        textDecoration: 'none',
        color: '#007bff',
        fontWeight: 'bold',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        background: '#f8f9fa',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    input: {
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '14px',
        width: '100%',
    },
    button: {
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
    },
};

export default AddPerson;
