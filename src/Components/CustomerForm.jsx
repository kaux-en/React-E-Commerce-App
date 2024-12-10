import React from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import axios from "axios";


const CustomerForm = () => {
    const url = `http://127.0.0.1:5000/customer`
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
  
      const handleOnSubmit = (e) => {
          e.preventDefault();
          addCustomer();
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
        <Form>
        <Form.Group className="mb-3" controlId="formgroupname">
            <Form.Label>Name</Form.Label>
              <Form.Control  
                type="name" 
                placeholder="Enter name"
                value={addedCustomer.name} 
                onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formgroupemail">
          <Form.Label>Email address</Form.Label>
            <Form.Control  
              type="email" 
              placeholder="Enter email" 
              value={addedCustomer.email}
              onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formgroupphone">
          <Form.Label>Phone</Form.Label>
            <Form.Control 
              type="tel" 
              placeholder="Phone number" 
              value={addedCustomer.phone}
              onChange={handleInputChange} />
        </Form.Group>
        <Button variant="primary" className="formbutton" onSubmit={handleOnSubmit}>Submit</Button>
      </Form>
      

    </div>
    );
};

export default CustomerForm;