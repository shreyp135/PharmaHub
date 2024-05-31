import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Consult from './pages/consult';
import VideoRoom from "./pages/videoRoom";
import DoctorSignup from './pages/doctorSignup';
import InsuranceSignup from './pages/insuranceSignup';
import Payment from './pages/payment';
import Insurance from "./pages/insurance"
import Medicines from './pages/medicines';

function App() {
  
  return (
    <>
    <Navbar/>

      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/SignIn" element={<SignIn/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/consult" element={<Consult/>}/>
            <Route path="/videoRoom/1003" element={<VideoRoom/>}/>
            <Route path="/doctorSignup" element={<DoctorSignup/>}/>
            <Route path="/insuranceSignup" element={<InsuranceSignup/>}/>
            <Route path="/insurance" element={<Insurance/>}/>
            <Route path="/medicines" element={<Medicines/>}/>

          </Routes>
      </BrowserRouter>
      {/* {window.location.pathname !== '/videoRoom/1003' && <Footer/> } */}
      <Footer/>
  </>
  );
}

export default App
