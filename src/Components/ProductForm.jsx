import React from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


const ProductForm = () => {
    const url = `http://127.0.0.1:5000/product`
    const { id } = useParams();
    let navigate = useNavigate();
    const [addedProduct, setAddedProduct] = useState({
      name: '',
      price: ''
    })
   
      const addProduct = async () => {
          try {
            const response = await axios.post(url, addedProduct)
            navigate(`/ProductDetails/${response.data.id}`)
            console.log('Product added successfully', {name, price})
              setAddedProduct({name: '', price: ''});
          } catch (error)  {
              console.error('Error adding Product:', error)
          }
      }; 
  
      const handleOnSubmit = async (e) => {
          e.preventDefault();
          addProduct();
      };

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddedProduct((prevData) => ({
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
                placeholder="Enter product name"
                value={addedProduct.name} 
                onChange={handleInputChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formgroupprice">
          <Form.Label>Price</Form.Label>
            <Form.Control  
              type="number" 
              name="price"
              placeholder="Enter price" 
              value={addedProduct.price}
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

export default ProductForm;