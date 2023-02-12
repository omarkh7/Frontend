import React from 'react'
import '../Home/Home.css';
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Achievements() {
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
  
    const apiURL = "http://localhost:5000/info";
  
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
    <div className="all">
    <p className="titleee">Achievements</p>
    <div className="container-home">

    {alldata.filter(info => info.info_category[0] === 'Achievements').slice(0,6).map((info, index) => (


    <div key={info._id}>

    <div className="row-home" key={index}>
        <div className="box-img-home">
          <img className="img-home" src={`http://localhost:5000/${info.info_image}`} alt="img"
          onClick={() => handleOpen(`http://localhost:5000/${info.info_image}`)}/>

{showModal && (
              <div className="modal-container" onClick={handleClose}>
                <div className="modal-content">
                  <img src={modalImage} alt="Modal Image" />
                </div>
              </div>
            )}
          </div>
          <div className="top-home"></div>
        <div className="content-home">
          <p>{info.info_description}</p>
        </div>
    </div>
    
</div>
))}

    </div>
  </div>
    </div>
  )
}

export default Achievements