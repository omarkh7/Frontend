import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {  Link } from "react-router-dom";

import './Sidebar.css';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaWpforms,
    FaCommentAlt,
    FaSignOutAlt

}from "react-icons/fa";

const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./login-admin";
  };


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuIt = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dashbriefinfo",
            name:"BriefInfo",
            icon:<FaTh/>
        },
        {
            path:"/dashcertification",
            name:"Certifications",
            icon:<FaTh/>
        },
        {
            path:"/dashwriteups",
            name:"Writeups",
            icon:<FaTh/>
        },
        {
            path:"/dashachievements",
            name:"Achievements",
            icon:<FaTh/>
        },
        {
            path:"/dasharticles",
            name:"Articles",
            icon:<FaTh/>
        },
        {
            path:"/dashbio",
            name:"Bio",
            icon:<FaTh/>
        },
        {
            path:"/dashendorsements&compliments",
            name:"Endor&Compl",
            icon:<FaTh/>
        },
        {
            path:"/dashhighlights",
            name:"Highlights",
            icon:<FaTh/>
        },
        {
            path:"/dashwnews&articles",
            name:"News&Articles",
            icon:<FaTh/>
        },
        {
            path:"/dashsocialmediaaccounts",
            name:"SocialAccounts",
            icon:<FaTh/>
        },
        {
            path:"/dashtalks&workshops",
            name:"Talks&Workshops",
            icon:<FaTh/>
        },
        {
            path:"/dashworkexperience",
            name:"Work Experience",
            icon:<FaTh/>
        },
        {
            path:"/dashwriteupsprojects",
            name:"Writeups Projects",
            icon:<FaTh/>
        },

      
   
  
    
   
    ]
    return (
        <div className="containerdash">
           <div style={{width: isOpen ? "225px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Admin</h1>
                  
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
                   
               </div>
               
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
                  <button style={{display: isOpen ? "block" : "none"}} onClick={logOut} className="logoutBTN">
          Log Out
        </button>
           </div>
           <main>{children}</main>

           
        </div>
    );
};

export default Sidebar;