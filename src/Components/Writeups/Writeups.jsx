import React from 'react'
import "./Writeups.css"
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link, useParams } from "react-router-dom";


function AllWriteups() {

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


  return(
  <div className="Writeupss">
  <p className="title">Writeups</p>
  <div className="containerWriteups">
  {alldata.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)).filter(info => info.info_category[0] === 'Writeups').map((info, index) => (
<div key={info._id}>
    <div className="row2">
        
    <img className="imeg" src={`http://localhost:5000/${info.info_image}`} alt="img"
    onClick={() => handleOpen(`http://localhost:5000/${info.info_image}`)}/>
        {showModal && (
              <div className="modal-containerW" onClick={handleClose}>
                <div className="modal-contentW">
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



</div>
</div>


)
}

export default Writeups
