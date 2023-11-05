import "./App.css";
import Home from "./pages/Home";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { useEffect } from "react";
import Header from "./components/Header";
import Login from "./pages/auth/Login";
import Footer from "./components/Footer";
import Post from "./pages/Post";
import SignUp from "./pages/auth/SignUp";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const allowedUrls = ["/", "/login","/signup"];

  // useEffect(() => {
  //   const isLoggedIn = localStorage.getItem("authToken");
  //   if (!isLoggedIn && !allowedUrls.includes(location.pathname)) {
  //     navigate("/login");
  //     toast.error("please login first")
  //   }
  // }, [location, navigate]);

  return (
    <div>
      <Header/>
      <Toaster/>
      <div className="min-h-[80vh]">
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<Post />} />
        {/* <Route path="/bmi" element={<Bmi />} />
        <Route path="/dietplan" element={<Dietplan />} />
        <Route path="/bmr" element={<Bmr />} />
        <Route path="/Bodyfat" element={<Bodyfat />} />
        <Route path="/profile" element={<Profile />} />
        
        <Route path="/signup" element={<Signup />} /> */}
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
