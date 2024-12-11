import { useState, useEffect } from "react";
import React from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const UpdateProduct = () => {
    //const [productId, setProductId] = useState('')
    const { id } = useParams();
    let navigate = useNavigate();
    const url = `http://127.0.0.1:5000/product/${id}`;
    const [errors, setErrors] = useState({});

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [productData, setProductData] = useState({
        name: '',
        price: ''
    });


    useEffect(() => {  
        const fetchproductData = async () => {  
            try {
            const response = await axios.get(url) 
            console.log(response.data) 
            const { name, price } = response.data
            setProductData({name, price});
            } catch (error) {
                console.error('Error fetching product data, error')
            }
        }; 
        fetchproductData();  
     }, [id]); 



     const validateForm = () => {
        const errors = {};
        if (!productData.name) errors.name = 'Name is required';
        if (!productData.price) errors.price = 'Price is required';
        return errors;
    }; 


    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationerrors = validateForm();
        if (Object.keys(validationerrors).length === 0) {
            try {
                console.log(productData)
                await axios.put(url, productData)
                navigate(`/ProductDetails/${id}`)
                console.log('Submitted product data:', { name, price });
            }  catch {
                setErrors(validationerrors);
            }  
        };
    };
    
     const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({
            ...prevData,
            [name]: value
        }));
     };
   
    
    return (
       <div>


        <form onSubmit={handleSubmit} className="editform">
                <h3>Add/Edit Product</h3>
                <label className="labels">
                    Name:
                    <input 
                        type="text" 
                        name="name" 
                        value={productData.name}
                        onChange={handleInputChange}  />
                    {errors.name && <div style={{ color: 'red' }}>{ errors.name }</div>}
                </label>
                <br />
                <label className="labels">
                    Price:
                    <input 
                        type="number" 
                        name="price" 
                        value={productData.price} 
                        onChange={handleInputChange}  />
                    {errors.price && <div style={{ color: 'red' }}>{ errors.price }</div>}
                </label>
                <br />
                <Button type="button" variant="primary" onClick={handleShow}>
                Submit
                </Button>
                <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Success!</Modal.Title>
                </Modal.Header>
                    <Modal.Body>Product has been updated!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={handleSubmit}>Save changes</Button>
                </Modal.Footer>
                </Modal>
            </form>
        </div>
        )
};

export default UpdateProduct;