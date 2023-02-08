import React from 'react';
import '../../Components/Achievements/Achievements.css'


function Highlights() {
  return (
    <div>
         <div className="all">
        <p className="title">Highlights</p>
        <div className="container">
          {/* box1 */}
          <div className="row">
            <div className="box-img">
              <img
                src="https://ahmadhalabi.net/wp-content/uploads/2021/08/US-Dept-Of-Defense-Rank-1-1-1024x502.png"
                alt=""
              ></img> </div>
              <div class="top"></div>
            <div className="content">
              <p>1st Rank in U.S. Dept of Defense</p>
            </div>
          </div>

          {/*   box2   */}
          <div className="row">
            <div className="box-img">
              <img
                src="https://ahmadhalabi.net/wp-content/uploads/2021/08/US-Dept-Of-Defense-Rank-1-1-1024x502.png"
                alt=""
              ></img> </div>
              <div class="top"></div>
            <div className="content">
              <p>1st Rank in U.S. Dept of Defense</p>
            </div>
          </div>
           
          {/* button see more */}
          <a  class="seemore" href="#">See More</a>
       


        
          {/* close of class container*/}
        </div>

        {/* close of class all */}
      </div>
    </div>
  )
}

export default Highlights;
