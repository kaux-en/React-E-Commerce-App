import NavigationBar from './Components/NavBar';
import './App.css'
import CustomerForm from './Components/CustomerForm';
import CustomerDetails from './Components/CustomerDetails';
import UpdateCustomer from './Components/UpdateCustomer';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerList from './Components/CustomerList';
import ProductForm from './Components/ProductForm';
import ProductList from './Components/ProductList';
import ProductDetails from './Components/ProductDetails';
import UpdateProduct from './Components/UpdateProduct'
import OrderForm from './Components/OrderForm';
import OrderDetails from './Components/OrderDetails';

function App() {


  return (
    <>
     <NavigationBar />

     <Routes>
         
         <Route path="/CustomerForm/" element={<CustomerForm />} />
         <Route path="/CustomerDetails/:id" element={<CustomerDetails />} />
         <Route path="/UpdateCustomer/:id" element={<UpdateCustomer />} />
         <Route path="/CustomerList/" element={<CustomerList />} />
         <Route path="/ProductList/" element={<ProductList />} />
         <Route path="/ProductForm/" element={<ProductForm /> }/>
         <Route path="ProductDetails/:id" element={<ProductDetails />} />
         <Route path="UpdateProduct/:id" element={<UpdateProduct />} /> 
         <Route path="/OrderForm/:id" element={<OrderForm />} />
         <Route path="/OrderDetails/" element={<OrderDetails />} />
         <Route path="*" element={<NotFound />} />
       </Routes>
    </>
  )
};

export default App;
