import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';



const OrderForm = () => {
    const { id } = useParams();
    const url = `http://127.0.0.1:5000/order`
    let navigate = useNavigate();
    const [addedOrder, setAddedOrder] = useState({
      date: '',
      customer_id: ''
    })

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   
      const addOrder = async () => {
          try {
            const response = await axios.post(url, addedOrder)
            console.log('Order added successfully', {date, customer_id})
            navigate(`OrderDetails/${id}`)
              setAddedOrder({date: '', customer_id: ''});
          } catch (error)  {
              console.error('Error adding Order:', error)
          }
      }; 
  
      const handleOnSubmit = async (e) => {
          e.preventDefault();
          addOrder();
      };

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddedOrder((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };


    return (
        <div>

        <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formgroupdate">
            <Form.Label>Date</Form.Label>
              <Form.Control  
                type="date" 
                name="date"
                value={addedOrder.date} 
                onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formgroupcustomer_id">
          <Form.Label>Customer Id</Form.Label>
            <Form.Control  
              type="number" 
              name="customer_id"
              value={addedOrder.customer_id}
              onChange={handleInputChange} />
        </Form.Group>
        <Button variant="primary" onClick={handleShow}>
                Submit
                </Button>
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Success!</Modal.Title>
                </Modal.Header>
                    <Modal.Body>Order has been made!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={handleOnSubmit}>Save changes</Button>
                </Modal.Footer>
            </Modal>

      </Form>
      

    </div>
    );
};

export default OrderForm;