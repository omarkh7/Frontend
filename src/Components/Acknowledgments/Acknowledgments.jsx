import React from "react";
import "./Acknowledgments..css";

function Acknowledgments() {
  return (
    <>
      <div className="all1">
        <p className="title">Acknowlegments</p>
        <div className="container1">
          <div className="textwidget">
            <p>
              Got Acknowledged by more than 200 Well Known Companies for
              Reporting Security Vulnerabilities in their Online Services and
              Products.
            </p>
            <p>
              Acknowledgements include Rewards, Certificates, Hall Of Fame and
              Swags.
            </p>
            <p>Some Of My Top Acknowledgements</p>
          </div>
          
            <div className="row1">
              <div className="boxImg1">
              <img
                className="imeg1"
                src="https://ahmadhalabi.net/wp-content/uploads/2020/10/United-States-Department-Of-Defense-1-300x100-1.png"
                alt=""
              ></img>
              <img
                className="imeg1"
                src="https://ahmadhalabi.net/wp-content/uploads/2020/10/Facebook-300x117-1.png"
                alt=""
              ></img>
              <img
                className="imeg1"
                src="https://ahmadhalabi.net/wp-content/uploads/2020/10/google-300x99-1.png"
                alt=""
              ></img>
              <img
                className="imeg1"
                src="https://ahmadhalabi.net/wp-content/uploads/2020/10/linkedin-1-300x78-1.png"
                alt=""
              ></img>
              </div>
              <div className="shadow"></div>
              <div className="boxImg2">
              <img
                className="imeg2"
                src="https://ahmadhalabi.net/wp-content/uploads/2020/10/ibm_logo-300x121-1.png"
                alt=""
              ></img>
              <img
                className="imeg2"
                src="https://ahmadhalabi.net/wp-content/uploads/2020/10/Microsoft-Logo-PNG-Transparent-Image-300x229.png"
                alt=""
              ></img>
              <img
                className="imeg2"
                src="https://ahmadhalabi.net/wp-content/uploads/2020/10/Twitter-300x108-1.png"
                alt=""
              ></img>
              <img
                className="imeg2"
                src="https://ahmadhalabi.net/wp-content/uploads/2020/10/51-Apple-300x169-1.png"
                alt=""
              ></img>
                </div>
            </div>
            
         
          <a  className="seemore1" href="#">See More</a>
          {/* close of class containerAcknowlegments*/}
        </div>

        {/* close of class Acknowlegments */}
      </div>
    </>
  );
}

export default Acknowledgments;
