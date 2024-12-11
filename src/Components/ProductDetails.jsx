import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from 'react-router-dom'


const ProductDetails = () => {
    const [productDetails, setProductDetails] = useState([])
    const { id } = useParams();
    let navigate = useNavigate
    const url = `http://127.0.0.1:5000/product/${id}`

    useEffect(() => {  
        const fetchproductDetails = async () => {  
            try {
            const response = await axios.get(url) 
            console.log(response.data) 
            setProductDetails(response.data);
            } catch (error) {
                console.error('Error fetching products', error)
            }
        }; 
        fetchproductDetails();  
     }, []);

     const deleteProduct = async () => {
        try {
        const response = await axios.delete(`http://127.0.0.1:5000/product/${id}`)
        console.log('Product has been deleted', response.data)
        } catch(error) {
            console.error('Error deleting product:', error)
        }
    }


     return (
        <>
            { (id) && (
            <div>
            <h3>Product Details</h3>
            <p>{productDetails.name}</p>
            <p>{productDetails.price}</p>
            </div>
            )}
            <button onClick={() => deleteProduct()} className="sidebuttons">Delete Product</button>
            <button onClick={() =>navigate('/OrderDetails') } className="sidebuttons">Orders</button>
        </>
     )
}

export default ProductDetails;