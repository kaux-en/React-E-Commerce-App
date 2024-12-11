import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
    return (
        <nav>
            <Navbar>  
                    { /*<NavLink to="/" className="nav-link">Home</NavLink>  */}
                    <Link to="/CustomerForm" className="nav-link">Add Customer</Link>
                    <Link to="/CustomerList" className="nav-link">Customer List</Link>
                    <Link to="/ProductForm" className="nav-link">Add Product</Link>
                    <Link to="/ProductList" className="nav-link">Product List</Link>
            </Navbar>
        </nav>
    );
};

export default NavigationBar;