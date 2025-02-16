import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import './App.css'
import RoleSelector from './Component/Roleselector/RoleSelector'
import Dashboard from './Component/User/Dashboard';
import Orderhistory from './Component/User/OrderHistory/Orderhistory.jsx';
import Login from './Component/User/Login';
import Registration from './Component/User/Registration.jsx';
import ResetPassword from './Component/User/ForgotPassword';
import WorkerDashbaord from './Component/Worker/workerDashbaord';
import Submitorder from './Component/User/SubmitOrder/Submitorder.jsx';
import Profile from './Component/User/Profile/Profile.jsx';
import OrderConfirmation from './Component/User/SubmitOrder/orderConfirmation.jsx';

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
    <Route index element={<div className='bg-softBlue min-h-screen'><RoleSelector /></div>} />
    <Route path="/user/userdashboard" element={<div className="bg-softBlue min-h-screen"> <Dashboard /></div>}  />    
    <Route path="/user/order-history" element={<div className="bg-historybg min-h-screen "> <Orderhistory /></div>}  />    
    <Route path="/user/submit-order" element={<div className="bg-historybg min-h-screen "> <Submitorder /></div>}  />    
    <Route path="/user/submit-order/success" element={<div className=" bg-gray-50 min-h-screen "> <OrderConfirmation /></div>}  />    
    <Route path="/user/profile" element={<div className="bg-softBlue min-h-screen "> <Profile /></div>}  />    
    <Route path="/workerdashboard" element={ <WorkerDashbaord /> } />  
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
