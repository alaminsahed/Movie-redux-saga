import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import NavBar from "./components/NavBar";

import Home from './pages/Home';

import About from './pages/About';
import EditUser from './pages/EditUser';
import Info from './pages/Info';
import User from './pages/User';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route element={<Home />} path="/home" />
          <Route element={<User />} path="/user" />
          <Route element={<Info />} path="/userInfo/:id" />
          <Route element={<About />} path="/about" />
          <Route element={<EditUser />} path="/AddEditUser/" />
          <Route element={<EditUser />} path="/AddEditUser/:id" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
