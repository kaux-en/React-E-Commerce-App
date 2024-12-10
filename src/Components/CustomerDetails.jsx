import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";


const CustomerDetails = () => { 
    const [error, setError] = useState(null)
    const [customerDetails, setCustomerDetails] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [customerId, setCustomerId] = useState('')
    const { id }  = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:5000/customer/${id}`)
                console.log('Data successfully fetched:', response.data);
                setCustomerDetails(response.data);
                setError(error)
            } catch (error)  {
                console.error('Error fetching Customer:', error)
            }
        }; if (id) {
            fetchDetails() 
        }
    }, [id]);

    const deleteCustomer = async () => {
        try {
        const response = await axios.delete(`http://127.0.0.1:5000/customer/${id}`)
        console.log('Customer has been deleted', response.data)
        } catch(error) {
            console.error('Error deleting customer:', error)
        }
    }
   

    return (
        <div>
         { (id) && (
            <div>
            <h2>Customer Data</h2>
            <p>{customerDetails.name}</p>
            <p>{customerDetails.email}</p>
            <p>{customerDetails.phone}</p>
            </div>
            )}
            <button onClick={() => deleteCustomer()}>Delete Customer</button>
        </div>
      );
};


export default CustomerDetails;
