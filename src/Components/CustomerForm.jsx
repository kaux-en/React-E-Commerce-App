import React from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const CustomerForm = () => {
    const url = 'http://127.0.0.1:5000/customer'
    const { id } = useParams();
    const [addedCustomer, setAddedCustomer] = useState({
      name: '',
      email: '',
      phone: ''
    })


   
      const addCustomer = async () => {
          try {
              const response = await axios.post(url, addedCustomer)
              console.log('Customer successfully added:', response.data);
              setAddedCustomer({name: '', email: '', phone: ''});
          } catch (error)  {
              console.error('Error adding Customer:', error)
          }
      }; 

      const validateForm = () => {
        if (!addedCustomer.name || !addedCustomer.email || !addedCustomer.phone) {
          alert('All fields are required');
          return false;
        }
        if (!/\S+@\S+\.\S+/.test(addedCustomer.email)) {
          alert('Please enter a valid email');
          return false;
        }
        return true;
      };
  
      const handleOnSubmit = (e) => {
          e.preventDefault();
          if (validateForm) {
          addCustomer();
          }
      };

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddedCustomer((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };


    return (
      <div>
        <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formgroupname">
            <Form.Label>Name</Form.Label>
              <Form.Control  
                type="text"
                name="name" 
                placeholder="Enter name"
                value={addedCustomer.name} 
                onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formgroupemail">
          <Form.Label>Email Address</Form.Label>
            <Form.Control  
              type="email" 
              name="email"
              placeholder="Enter email" 
              value={addedCustomer.email}
              onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formgroupphone">
          <Form.Label>Phone</Form.Label>
            <Form.Control 
              type="tel" 
              name="phone"
              placeholder="Phone number" 
              value={addedCustomer.phone}
              onChange={handleInputChange} />
        </Form.Group>
        <Button 
          variant="primary" 
          className="formbutton" 
          type="submit">
          Submit
        </Button>
        
      </Form>
    </div>
    );
};

export default CustomerForm;