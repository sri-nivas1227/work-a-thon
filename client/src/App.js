import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './pages/Home'
import User from './pages/user/User'
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" >
        <Route index element={<Home></Home>} />
        <Route path="user" element={<User />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App