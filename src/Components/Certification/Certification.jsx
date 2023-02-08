import React from 'react'
import "./Certification.css"
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link, useParams } from "react-router-dom";




function Certification() {
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
      <div className="all" >
        <p className="titleee">Certifications</p>
        <div className="container-home-cert">
          {alldata.filter(info => info.info_category[0] === 'Certifications').map((info, index) => (
            <div key={info._id}>
              <div className="row-home" key={index}>
                <div className="box-img-home" >
                  <img
                    className="img-home"
                    src={`http://localhost:5000/${info.info_image}`}
                    alt="img"    onClick={() => handleOpen(`http://localhost:5000/${info.info_image}`)}
                    
                  />
                   {showModal && (
              <div className="modal-container" onClick={handleClose}>
                <div className="modal-content">
                  <img src={modalImage} alt="Modal Image" />
                </div>
              </div>
            )}

                {/* onClick={() => handleImageClick(`http://localhost:5000/${info.info_image}`)} */}
                </div>
                <div className="top-home"></div>
                <div className="content-home">
                  <p>{info.info_description}</p>
                </div>
                <br />
                <br />
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
}

export default Certification;



