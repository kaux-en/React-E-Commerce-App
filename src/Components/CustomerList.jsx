import { useState, useEffect } from "react"
import axios from "axios";
import { useParams, useNavigate, Link } from 'react-router-dom'

const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    const { id } = useParams();
    let navigate = useNavigate();
    const url = 'http://127.0.0.1:5000/customers';

    useEffect(() => {  
        const fetchData = async () => {  
            try {
            const response = await axios.get(url) 
            console.log(response.data) 
            setCustomers(response.data);
            } catch (error) {
                console.error('Error fetching details, error')
            }
        }; 
        fetchData();  
     }, []); 


     return (
        <ul>
            {
                customers.length >= 1 && customers.map(customer => (
                    <li>
                    <p><Link to={`/CustomerDetails/${customer.id}`}>{customer.name}</Link></p><button onClick={() => navigate(`/UpdateCustomer/${customer.id}`) }>Update Customer</button>
                    </li>
                ))
            }
        </ul>
     )
}

export default CustomerList;

