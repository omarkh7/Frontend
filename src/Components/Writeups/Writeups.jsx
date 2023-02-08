import React from "react";
import "./Writeups.css";

function Writeups() {
  return (
    <div>
      <div className="all1">
        <p className="title">Writeups</p>
        <div className="container1">
          <div className="row1">
              
                <img
                  className="gglimeg"
                  src="https://ahmadhalabi.net/wp-content/uploads/2020/10/google.png"
                  alt=""
                ></img>
              
              <div className="shadow"></div>
              <div className="textwidget1">
                <p>IDOR in Google APIs</p>
                <p>Reported to Google – Published On: 10 Jun 2020</p>
              </div>
                <a
                  className="ReadFullWriteup"
                  href="https://bugreader.com/ahmad_halabi@idor-in-google-apis-194">
                  Read Full Writeup
                </a>
             
            
          </div>

          <a className="seemore1" href="#">
            See More
          </a>
          {/* close of class containerAcknowlegments*/}
        </div>

        {/* close of class Acknowlegments */}
      </div>
    </div>
  );
}

export default Writeups;
