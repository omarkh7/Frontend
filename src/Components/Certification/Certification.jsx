import React from 'react'
import "./Certification.css"

function Certification() {
  return (
    <div>
      <div className="Certification">
        <p className="title">Certification</p>
        <div className="containerCertification">
          {/* 11111 */}
          <div className="row">
            <div className="box-img">
              <img
                src="https://ahmadhalabi.net/wp-content/uploads/2021/08/US-Dept-Of-Defense-Rank-1-1-1024x502.png"
                alt=""
              ></img> </div>
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
              ></img> </div>
              <div className="top"></div>
            <div className="content">
              <p>1st Rank in U.S. Dept of Defense</p>
            </div>
          </div>
          <a  className="seemore" href="#">See More</a>
       


        
          {/* close of class container*/}
        </div>

        {/* close of class certification */}
      </div>
    </div>
  )
}

export default Certification
