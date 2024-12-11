import { useState, useEffect } from "react";
import axios from "axios";


const OrderDetails = () => {
    const [orderDetails, setOrderDetails] = useState([])
    const url = `http://127.0.0.1:5000/order${id}`


        const fetchorderDetails = async () => {  
            try {
            const response = await axios.get(url) 
            console.log(response.data) 
            setOrderDetails(response.data);
            } catch (error) {
                console.error('Error fetching orders', error)

            } if (orderDetails) {
            fetchorderDetails()
            } else {
                return (
                    <p>"No orders available</p>
                )
            };
        }; 
          


     const deleteOrder = async () => {
        try {
        const response = await axios.delete(`http://127.0.0.1:5000/order/${id}`)
        console.log('Order has been deleted', response.data)
        } catch(error) {
            console.error('Error deleting order:', error)
        }
    }


     return (
        <>
                <ul>
                    { orderDetails.length >= 1 && orderDetails.map(orderDetail => (
                        <li>
                            <h3>Order Details</h3>
                            <p>{orderDetail.date}</p>
                            <p>{orderDetail.customer_id}</p>
                        </li>
                    ))}
                </ul>
            <button onClick={() => deleteOrder()} className="sidebuttons">Delete Order</button>
            
        </>
     )
}

export default OrderDetails;
