import React from "react";
import "./Achievements.css";

function Achievement() { 
  return (
    <>
      <div className="all">
        <p className="title">Achievement</p>
        <div className="container">
          {/* 11111 */}
          <div className="row">
            <div className="box-img">
              <img  src="https://ahmadhalabi.net/wp-content/uploads/2021/08/US-Dept-Of-Defense-Rank-1-1-1024x502.png"
                alt=""
              ></img>
              
              {/* <img  className="secondImage"
                src="https://ahmadhalabi.net/wp-content/uploads/2021/08/US-Dept-Of-Defense-Rank-1-1-1024x502.png"
                alt="" 
              ></img>  */}
              </div>
              <div className="top"></div>
            <div className="content">
              <p>1st Rank in U.S. Dept of Defense</p>
            </div>
          </div>

          {/*   2222   */}
          <div className="row">
            <div className="box-img">
              <img
                src="https://ahmadhalabi.net/wp-content/uploads/2021/08/US-Dept-Of-Defense-Rank-1-1-1024x502.png"
                alt=""
              ></img>    
              
               </div>
              <div className="top"></div>
            <div className="content">
              <p>1st Rank in U.S. Dept of Defense</p>
            </div>
          </div>
          <a  className="seemore" href="#">See More</a>
          {/* close of class container*/}
        </div>

        {/* close of class all */}
      </div>
    </>
  );
}


export default Achievement;
