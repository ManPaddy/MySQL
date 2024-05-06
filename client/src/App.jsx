import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Admin } from '../components/admin';
import { Eachcategory } from '../components/eachcategory';
import { Home } from "../components/home"
import { Login } from "../components/login"
import { Register } from "../components/register"

function App() {
  return (
        <div>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Login></Login>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                {/* <Route path="/login" element={<Login></Login>}></Route> */}
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/admin" element={<Admin></Admin>}></Route>
                <Route path="/category/:name" element={<Eachcategory></Eachcategory>}></Route>
              </Routes>
            </BrowserRouter>
        </div>
        );

}

export default App
