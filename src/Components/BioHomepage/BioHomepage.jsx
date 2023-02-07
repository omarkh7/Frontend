import img1 from "../../assets/ahmad-laptop.jpg";
import "./BioHomepage.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function BioHomepage() {


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
    <section className="home">
      <div className="container">
        <div className="flexxy">
          <div className="flexwidth">
            <div className="info">

            {alldata.filter(info=>info.info_category[0]==='Bio').map(info => (
        <div key={info._id}>
          <h1>{info.info_title}</h1>
          <p>{info.info_description}</p>
        </div>
      ))}
              <button className="button1">
                {" "}
                <Link to="/biography">Check Full Biography</Link>{" "}
              </button>
            </div>
          </div>
          <div className="fleximg">
            <img className="img1" src={img1}></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BioHomepage;

