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

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="acknowledgments" element={<Acknowledgments />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="certification" element={<Certification />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="highlights" element={<Highlights />} />
        <Route path="writeups" element={<Writeups />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
