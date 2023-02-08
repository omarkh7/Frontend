import React, { useState, useEffect } from 'react';
import axios from 'axios';




function Biography() {

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
      <h1>Certifications</h1>
      {alldata.filter(info=>info.info_category[0]==='Certifications').map(info => (
        <div key={info._id}>
          <h2>{info.info_title}</h2>
          <p>{info.info_description}</p>
        </div>
      ))}
<div>Achievements</div>
{alldata.filter(info=>info.info_category[0]==='Achievements').map(info => (
        <div key={info._id}>
          <h2>{info.info_title}</h2>
          <p>{info.info_description}</p>
        </div>
      ))}


    </div>
  );
};


export default Biography
