import Home from './pages/Home';
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import Cart from "./pages/cart";

function App() {

  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App
