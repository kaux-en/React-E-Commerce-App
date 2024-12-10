import { useState, useEffect } from "react";
import React from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";


const UpdateCustomer = () => {
    const [customerId, setCustomerId] = useState('')
    const { id } = useParams();
    let navigate = useNavigate();
    const url = `http://127.0.0.1:5000/customer/${id}`;
    const [errors, setErrors] = useState({});

    const [customerData, setCustomerData] = useState({
        name: '',
        email: '',
        phone: ''
    });


    useEffect(() => {  
        const fetchData = async () => {  
            try {
            const response = await axios.get(url) 
            console.log(response.data) 
            const { name, email, phone } = response.data
            setCustomerData({name, email, phone});
            } catch (error) {
                console.error('Error fetching details, error')
            }
        }; 
        fetchData();  
     }, [id]); 



     const validateForm = () => {
        const errors = {};
        if (!customerData.name) errors.name = 'Name is required';
        if (!customerData.email) errors.email = 'Email is required';
        if (!customerData.phone) errors.phone = 'Phone is required';
        return errors;
    }; 


    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationerrors = validateForm();
        if (Object.keys(validationerrors).length === 0) {
            try {
                console.log(customerData)
                await axios.put(url, {...customerData, id:id})
                navigate(`/CustomerDetails/${customerId}`)
                console.log('Submitted customer data:', { name, email, phone });
            }  catch {
                setErrors(validationerrors);
            }  
        };
    };
    
     const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomerData((prevData) => ({
            ...prevData,
            [name]: value
        }));
     };
   
    
    return (
       <div>


        <form onSubmit={handleSubmit} className="editform">
                <h3>Add/Edit Customer</h3>
                <label className="labels">
                    Name:
                    <input 
                        type="text" 
                        name="name" 
                        value={customerData.name}
                        onChange={handleInputChange}  />
                    {errors.name && <div style={{ color: 'red' }}>{ errors.name }</div>}
                </label>
                <br />
                <label className="labels">
                    Email:
                    <input 
                        type="email" 
                        name="email" 
                        value={customerData.email} 
                        onChange={handleInputChange}  />
                    {errors.email && <div style={{ color: 'red' }}>{ errors.email }</div>}
                </label>
                <br />
                <label className="labels">
                    Phone:
                    <input 
                    type="tel" 
                    name="phone" 
                    value={customerData.phone}
                    onChange={handleInputChange} />
                    {errors.phone && <div style={{ color: 'red' }}>{ errors.phone }</div>}
                </label>
                <br />
                <button type="submit" className="submitupdate">Submit</button>
            </form>
        </div>
        )
};

export default UpdateCustomer;

