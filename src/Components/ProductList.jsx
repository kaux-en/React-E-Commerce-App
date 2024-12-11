import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from 'react-router-dom'


const ProductList = () => {
    const [products, setProducts] = useState([])
    const url = 'http://127.0.0.1:5000/products'
    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {  
        const fetchProducts = async () => {  
            try {
            const response = await axios.get(url) 
            console.log(response.data) 
            setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products', error)
            }
        }; 
        fetchProducts();  
     }, []);


     return (
        <ul>
            { products.length >= 1 && products.map(product => (
                <li>
                    <p><Link to={`/ProductDetails/${product.id}`} className="li">{product.name}</Link></p><button onClick={() => navigate(`/UpdateProduct/${product.id}`) } className="button-1">Update Product</button>  
                    <button onClick={() => navigate(`/OrderForm/${product.id}`)} className="button-1">Order Product</button>      
                </li>
            ))
            }
        </ul>
     )
}

export default ProductList;