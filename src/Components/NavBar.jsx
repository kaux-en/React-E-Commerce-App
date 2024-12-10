import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
    return (
        <nav>
            <Navbar>  
                    { /*<NavLink to="/" className="nav-link">Home</NavLink>  */}
                    <Link to="/CustomerForm" className="nav-link">Customer Form</Link>
                    <Link to="/CustomerList" className="nav-link">Customer List</Link>
            </Navbar>
        </nav>
    );
};

export default NavigationBar;