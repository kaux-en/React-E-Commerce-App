import NavigationBar from './Components/NavBar';
import './App.css'
import CustomerForm from './Components/CustomerForm';
import CustomerDetails from './Components/CustomerDetails';
import UpdateCustomer from './Components/UpdateCustomer';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerList from './Components/CustomerList';

function App() {


  return (
    <>
     <NavigationBar />

     <Routes>
         
         <Route path="/CustomerForm/" element={<CustomerForm />} />
         <Route path="/CustomerDetails/:id" element={<CustomerDetails />} />
         <Route path="/UpdateCustomer/:id" element={<UpdateCustomer />} />
         <Route path="/CustomerList/" element={<CustomerList />} />
         <Route path="*" element={<NotFound />} />
       </Routes>
    </>
  )
};

export default App;
