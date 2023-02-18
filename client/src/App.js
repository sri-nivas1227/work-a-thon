import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import User from './pages/user/User'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" >
        <Route index element={<></>} />
        <Route path="user" element={<User />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
