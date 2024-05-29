import Home from './pages/Home';
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";

function App() {

  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App
