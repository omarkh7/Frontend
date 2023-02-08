import "./App.css";
import { Routes, Route } from "react-router-dom";
import Biography from "./Components/Biography/Biography";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Acknowledgments from "./Components/Acknowledgments/Acknowledgments";
import Achievements from "./Components/Achievements/Achievements";
import Blogs from "./Components/Blogs/Blogs";
import Certification from "./Components/Certification/Certification";
import ContactUs from "./Components/ContactUs/ContactUs";
import Highlights from "./Components/Highlights/Highlights";
import Writeups from "./Components/Writeups/Writeups";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import SignUp from "./Components/Login/SignUp";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");

  return (
    <div >
Hello Team :p   </div>
  );
}

export default App