import React from 'react'
import "./Dashboard.css"
function Dashboard() {

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./login-admin";
  };


  return (
    <div>
      DAshboard


      <button onClick={logOut} className="logoutBTN">
          Log Out
        </button>
    </div>
  )
}

export default Dashboard
