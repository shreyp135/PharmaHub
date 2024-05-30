import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import Cart from "./pages/cart";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Consult from './pages/consult';
import VideoRoom from "./pages/videoRoom";

function App() {
  
  return (
    <>
    <Navbar/>

      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/SignIn" element={<SignIn/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/consult" element={<Consult/>}/>
            <Route path="/videoRoom/1003" element={<VideoRoom/>}/>
          </Routes>
      </BrowserRouter>
  <Footer/>
  </>
  );
}

export default App
