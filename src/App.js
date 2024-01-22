import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeScreen from "./pages/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp"
import BlogDes from "./pages/BlogDes";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/all" element={<BlogPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/" element={<SignUp />} />
        <Route path="/blogs/:id" element={<BlogDes />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
