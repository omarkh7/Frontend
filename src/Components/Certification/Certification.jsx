import React from 'react'
import "./Certification.css"
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link, useParams } from "react-router-dom";


function AllCertifications() {

  const [alldata, setAllData] = useState([]);

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
      <div className="Certificationc">
        <p className="title">Certifications</p>
        <div className="containerCertification">

        {alldata.filter(info => info.info_category[0] === 'Certifications').map((info, index) => (
 <div key={info._id}>
   <div className="row" key={index}>
        <div className="box-img">
          <img className="box-img" src={`http://localhost:5000/${info.info_image}`} alt="img" />

          </div>
          <div className="top"></div>
        <div className="contentC">
          <p>{info.info_description}</p>
        </div>
        <br/>  <br/>
        
    </div>
   
    
</div>
))}


 </div>
    {/* <div><p className='dotted'></p> </div> */}
  </div>

      </div>
  )
}

export default AllCertifications



