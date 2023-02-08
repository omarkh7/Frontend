import React from 'react'
import "./Home.css";
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link, useParams } from "react-router-dom";


function HomePage() {

  const [alldata, setAllData] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleClose = (e) => {
    e.stopPropagation();
    setShowModal(false);
  };

  const handleOpen = (imgSrc) => {
    setModalImage(imgSrc);
    setShowModal(true);
  };


  const apiURL = 'http://localhost:5000/info';


  const fetchallData = async () => {
    try {
      const response = await axios.get(apiURL);
      console.log(response.data);
      setAllData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {

    fetchallData();

  }, []);

  return (
    <div>
        {/* Achievements */}
    <div className="Achievement">
    <p className="title">Achievements</p>
    <div className="containerAchievement">

    {alldata.filter(info => info.info_category[0] === 'Achievements').slice(0,6).map((info, index) => (


    <div key={info._id}>

    <div className="row" key={index}>
        <div className="box-img">
          <img className="box-img" src={`http://localhost:5000/${info.info_image}`} alt="img"
          onClick={() => handleOpen(`http://localhost:5000/${info.info_image}`)}/>

{showModal && (
              <div className="modal-container" onClick={handleClose}>
                <div className="modal-content">
                  <img src={modalImage} alt="Modal Image" />
                </div>
              </div>
            )}
          </div>
          <div className="top"></div>
        <div className="content">
          <p>{info.info_description}</p>
        </div>
    </div>
    
</div>
))}

    </div>
    {/* <div><p className='dotted'></p> </div> */}
  </div>

  {/* Acknowledgments */}

  <div className="Acknowlegments">
        <p className="title">Acknowlegments</p>
        <div className="containerAcknowlegments">
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
              <div className="shadow" ></div>
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
        </div>
{/* Certifications */}
  <div className="Certification">
        <p className="title">Certifications</p>
        <div className="containerCertification">

        {alldata.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).filter(info => info.info_category[0] === 'Certifications') .slice(0, 2).map((info, index) => (
 <div key={info._id}>
   <div className="row" key={index}>
        <div className="box-img">
          <img className="box-img" src={`http://localhost:5000/${info.info_image}`} alt="img"
          onClick={() => handleOpen(`http://localhost:5000/${info.info_image}`)}/>
{showModal && (
              <div className="modal-container" onClick={handleClose}>
                <div className="modal-content">
                  <img src={modalImage} alt="Modal Image" />
                </div>
              </div>
            )}
          </div>
          <div className="top"></div>
        <div className="content">
          <p>{info.info_description}</p>
        </div>
        <br/>  <br/>
        
    </div>
   
    
</div>
))}
<a  className="seemore" href="/Certification" target="_blank">See More</a>

 </div>
    {/* <div><p className='dotted'></p> </div> */}
  </div>

  {/* Highlights */}

  <div className="Highlights">
        <p className="title">Highlights</p>
        <div className="containerCertification">

        {alldata.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).filter(info => info.info_category[0] === 'Highlights').slice(0,4).map((info, index) => (
 <div key={info._id}>
   <div className="row" key={index}>
        <div className="box-img">
          <img className="box-img" src={`http://localhost:5000/${info.info_image}`} alt="img"
          onClick={() => handleOpen(`http://localhost:5000/${info.info_image}`)}/>
{showModal && (
              <div className="modal-container" onClick={handleClose}>
                <div className="modal-content">
                  <img src={modalImage} alt="Modal Image" />
                </div>
              </div>
            )}
          </div>
          <div className="top"></div>
        {/* <div className="contentC">
          <p>{info.info_description}</p> </div> */}
        </div>
        <br/>  <br/>
    </div>
  
))}
<a  className="btnSeemore" href="/Highlights" target="_blank" >See More</a>

 </div>
    
  </div>

  {/* Writeups */}
  <div className="Writeups">
        <p className="title">Writeups</p>
        <div className="containerWriteups">
        {alldata.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)).filter(info => info.info_category[0] === 'Writeups').slice(0, 1).map((info, index) => (
 <div key={info._id}>
          <div className="row2">
              
          <img className="imeg" src={`http://localhost:5000/${info.info_image}`} alt="img"
          onClick={() => handleOpen(`http://localhost:5000/${info.info_image}`)}/>
              {showModal && (
              <div className="modal-containerW" onClick={handleClose}>
                <div className="modal-write">
                  <img src={modalImage} alt="Modal Image" />
                </div>
              </div>
            )}
              <div className="shadow1"></div>
              <div className="textwidget">
                <p>{info.info_title}</p>
              <p>{info.info_description}</p>
              
               
              </div>
              <a className="ReadFullWriteup" href={info.info_url}>Read Full Writeup</a>
                
            
          </div>

    
      </div>
      ))}
      <a  className="seemore1" href="/Writeups" target="_blank" >See More</a>


  </div>
  </div>
  </div>

  )
}

export default HomePage

