import React from 'react'
import "./Highlights.css"
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link, useParams } from "react-router-dom";


function AllHighlights() {

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
      <div className="Highlights">
        <p className="title">Highlights</p>
        <p>Below are some Highlights and Milestones that I achieved during my career as a Security Researcher and Bug Bounty Hunter.</p>

<p>(Click on the Image in order to view it clearly)</p>
        <div className="containerHighlights">

        {alldata.filter(info => info.info_category[0] === 'Highlights').map((info, index) => (
 <div key={info._id}>
   <div className="row" key={index}>
        <div className="box-img">
          <img className="box-img" src={`http://localhost:5000/${info.info_image}`} alt="img"/>

          </div>
          <div className="top"></div>
        {/* <div className="contentC">
          <p>{info.info_description}</p>
        </div> */}
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

export default AllHighlights