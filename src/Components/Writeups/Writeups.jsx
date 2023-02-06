import React from "react";
import "./Writeups.css";

function Writeups() {
  return (
    <div>
      <div className="Writeups">
        <p className="title">Writeups</p>
        <div className="containerWriteups">
          <div className="row2">
              
                <img
                  className="imeg"
                  src="https://ahmadhalabi.net/wp-content/uploads/2020/10/google.png"
                  alt=""
                ></img>
              
              <div className="shadow1"></div>
              <div className="textwidget">
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
