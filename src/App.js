import "./App.css";
import { Routes } from "react-router-dom";
import Biography from "./Components/Biography/Biography";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Acknowledgments from "./Components/Acknowledgments/Acknowledgments";
import Achievements from "./Components/Achievements/Achievements";
import Blogs from "./Components/Blogs/Blogs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Highlights from "./Components/Highlights/Highlights";
import Writeups from "./Components/Writeups/Writeups";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import SignUp from "./Components/Login/SignUp";
import Certification from "./Components/Certification/Certification";
import { useEffect, useState } from "react";

import { Route, Navigate } from "react-router-dom";
import DashWritesups from "./Components/Dashboard/Sidebar/Pages/DashWriteups";
import DashBriefInfo from "./Components/Dashboard/Sidebar/Pages/DashBriefinfo";
import DashCertifications from "./Components/Dashboard/Sidebar/Pages/DashCertifications";
import DashAchievements from "./Components/Dashboard/Sidebar/Pages/DashAchievements";
import DashMyArticles from "./Components/Dashboard/Sidebar/Pages/DashArticles";
import DashBio from "./Components/Dashboard/Sidebar/Pages/DashBio";
import DashEndcomp from "./Components/Dashboard/Sidebar/Pages/DashEndorsements&Compliments";
import DashHighlights from "./Components/Dashboard/Sidebar/Pages/DashHighlights";
import DashNewsArticles from "./Components/Dashboard/Sidebar/Pages/DashNews&Articles";
import DashSocialmedia from "./Components/Dashboard/Sidebar/Pages/DashSocialMediaAccounts";
import DashTalksWorkshops from "./Components/Dashboard/Sidebar/Pages/DashTalks&Workshops";
import DashWorkexperience from "./Components/Dashboard/Sidebar/Pages/DashWorkexperience";
import DashWritesupandproject from "./Components/Dashboard/Sidebar/Pages/DashWriteupsProjects";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    window.localStorage.getItem("loggedIn")
  );

  useEffect(() => {
    setIsLoggedIn(window.localStorage.getItem("loggedIn"));
  }, []);

  return (
    <div>
      <Header />

      <Routes>
        <Route
          exact
          path="/login-admin"
          element={isLoggedIn === "true" ? <Dashboard /> : <Login />}
        />
        <Route
          exact
          path="/dashbriefinfo"
          element={isLoggedIn === "true" ? <DashBriefInfo/> : <Login />}
        />
        <Route
          exact
          path="/dashcertification"
          element={isLoggedIn === "true" ? <DashCertifications /> : <Login />}
        />
        <Route
          exact
          path="/dashwriteups"
          element={isLoggedIn === "true" ? <DashWritesups /> : <Login />}
        />
          <Route
          exact
          path="/dashachievements"
          element={isLoggedIn === "true" ? <DashAchievements /> : <Login />}
        />
          <Route
          exact
          path="/dasharticles"
          element={isLoggedIn === "true" ? <DashMyArticles /> : <Login />}
        />
          <Route
          exact
          path="/dashbio"
          element={isLoggedIn === "true" ? <DashBio /> : <Login />}
        />
          <Route
          exact
          path="/dashendorsements&compliments"
          element={isLoggedIn === "true" ? <DashEndcomp /> : <Login />}
        />
          <Route
          exact
          path="/dashhighlights"
          element={isLoggedIn === "true" ? <DashHighlights/> : <Login />}
        />
          <Route
          exact
          path="/dashwnews&articles"
          element={isLoggedIn === "true" ? <DashNewsArticles /> : <Login />}
        />
          <Route
          exact
          path="/dashsocialmediaaccounts"
          element={isLoggedIn === "true" ? <DashSocialmedia /> : <Login />}
        />
          <Route
          exact
          path="/dashtalks&workshops"
          element={isLoggedIn === "true" ? <DashTalksWorkshops /> : <Login />}
        />
          <Route
          exact
          path="/dashworkexperience"
          element={isLoggedIn === "true" ? <DashWorkexperience /> : <Login />}
        />
          <Route
          exact
          path="/dashwriteupsprojects"
          element={isLoggedIn === "true" ? <DashWritesupandproject /> : <Login />}
        />

        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/acknowledgments" element={<Acknowledgments />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/writeups" element={<Writeups />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
