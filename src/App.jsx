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
import BmiCalculator from "./pages/BMI";
import NotFound from "./pages/NotFound";
import BMR from "./pages/BMR";
import BodyFatCalculator from "./pages/BodyFat";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dietplan from "./pages/Dietplan";
function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const allowedUrls = ["/", "/login", "/signup", "/post/:id"];

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("authToken");
  
    const isAllowed = allowedUrls.some((url) => {
      if (url.includes('/:id')) {
        const regex = new RegExp(`^${url.replace('/:id', '(.+)')}$`);
        return regex.test(location.pathname);
      }
   
      return url === location.pathname;
    });
  
    if (!isLoggedIn && !isAllowed) {
      navigate("/login");
      toast.error("Please login first");
    }
  }, [location, navigate]);
  
  

  return (
    <div>
      <Header />
      <Toaster/>
      <div className="min-h-[80vh]">
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/bmi" element={<BmiCalculator />} />
        <Route path="/bmr" element={<BMR />} />
        <Route path="/bodyfat" element={<BodyFatCalculator />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/dietplan" element={<Dietplan />} /> 

        <Route path="*" element={<NotFound/>} />
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
