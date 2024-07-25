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
            <Route path="https://pharma-hub.vercel.app//" element={<Home/>}/>
            <Route path="https://pharma-hub.vercel.app//SignIn" element={<SignIn/>}/>
            <Route path="https://pharma-hub.vercel.app//SignUp" element={<SignUp/>}/>
            <Route path="https://pharma-hub.vercel.app//payment" element={<Payment/>}/>
            <Route path="https://pharma-hub.vercel.app//consult" element={<Consult/>}/>
            <Route path="https://pharma-hub.vercel.app//videoRoom/1003" element={<VideoRoom/>}/>
            <Route path="https://pharma-hub.vercel.app//doctorSignup" element={<DoctorSignup/>}/>
            <Route path="https://pharma-hub.vercel.app//insuranceSignup" element={<InsuranceSignup/>}/>
            <Route path="https://pharma-hub.vercel.app//insurance" element={<Insurance/>}/>
            <Route path="https://pharma-hub.vercel.app//medicines" element={<Medicines/>}/>

          </Routes>
      </BrowserRouter>
      {/* {window.location.pathname !== '/videoRoom/1003' && <Footer/> } */}
      <Footer/>
  </>
  );
}

export default App
