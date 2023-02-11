import React, { useState, useEffect } from 'react';
import img1 from "../../assets/ahmad-laptop.jpg";

import axios from 'axios';
import "./Biography.css"

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
    
    <div className='bodyi'>
      {/* Brief Info */}
      <div className="fleximg">
            <img className="img1" src={img1}></img>
          </div>
          <h1 className='titlebio'>Brief Info</h1>
      {alldata.filter(info=>info.info_category[0]==='Brief Info').map(info => (


        <div key={info._id}>

          <p className='contentbio'>{info.info_description}</p>
        </div>
      ))}
      <div><p className='dotted'></p> </div>

{/* Work Experience */}
<h1 className='titlebio'>Work Experience</h1>
      {alldata.filter(info=>info.info_category[0]==='Work Experience').map(info => (


        <div key={info._id}>

          <p className='contentW'>–  {info.info_description}</p>
        </div>
      ))}
      <div><p className='dotted'></p> </div>

      {/* Achievements */}

<h1 className='titlebio'>Achievements</h1>
{alldata.filter(info=>info.info_category[0]==='Achievements').map(info => (
        <div key={info._id}>
          {/* <h2>{info.info_title}</h2> */}
          <p className='contentbio'>– {info.info_description}</p>
        </div>
      ))}
      <div><p className='dotted'></p> </div>

{/* Certifications */}
      <h1 className='titlebio'>Certifications</h1>
      {alldata
  .filter(info => info.info_category[0] === 'Certifications')
  .map((info, index) => (
    <div key={info._id}>
     
      <ol className='contentW'>{index+1}. {info.info_description}</ol>
       
    </div>
  ))}
   <div><p className='dotted'></p> </div>


{/* Talks & Workshops */}
<h1 className='titlebio'>Talks & Workshops</h1>
      {alldata.filter(info=>info.info_category[0]==='Talks & Workshops').map(info => (


        <div key={info._id}>

          <p className='contentW'>– {info.info_description} <a className='contentW'href={info.info_url}>(reference)</a>.</p>
        </div>
      ))}
       <div><p className='dotted'></p> </div>


{/* Endorsements & Compliments */}
<h1 className='titlebio'>Endorsements & Compliments</h1>
      {alldata.filter(info=>info.info_category[0]==='Endorsements & Compliments').map(info => (


        <div key={info._id}>

          <p className='contentW' >– {info.info_description} <a className='contentW'href={info.info_url}>Reference</a>.</p>
        </div>
      ))}
       <div><p className='dotted'></p> </div>


{/* News & Articles*/}
<h1 className='titlebio'>News & Articles</h1>
      {alldata.filter(info=>info.info_category[0]==='News & Articles').map(info => (


        <div key={info._id}>

          <p className='contentW'>– {info.info_description} <a className='contentW'href={info.info_url}>Article Link</a>.</p>
        </div>
      ))}
       <div><p className='dotted'></p></div>

{/* My Articles */}
<h1 className='titlebio'>My Articles</h1>
      {alldata.filter(info=>info.info_category[0]==='My Articles').map(info => (


        <div key={info._id}>

          <p className='contentW'>– {info.info_description} <a className='contentW'href={info.info_url}> Link</a></p>
        </div>
      ))}

<div><p className='dotted'></p> </div>

{/* Writeups – Reports – Projects */}
<h1 className='titlebio'>Writeups – Reports – Projects</h1>
      {alldata.filter(info=>info.info_category[0]==='Writeups & Projects').map(info => (

        <div key={info._id}>

          <p className='contentW'>– {info.info_description} <a className='contentW'href={info.info_url}> Link</a></p>
        </div>
      ))}
       <div><p className='dotted'></p> </div>

       {/*Social Media Accounts */}
<h1 className='titlebio'>Social Media Accounts</h1>
      {alldata.filter(info=>info.info_category[0]==='Social Media Accounts').map(info => (

        <div key={info._id}>
          {/* <p>{info.info_url_linkedin}LinkedIn</p> */}

        <a className='contentW' href={info.info_url}>{info.info_title}</a><br></br>


         {/* <a className='contentW'href={info.info_url_facebook}>Facebook</a><br></br>  */}
     
        </div>
      ))}
       <div><p className='dotted'></p> </div>

    </div>
  );
};
export default Biography