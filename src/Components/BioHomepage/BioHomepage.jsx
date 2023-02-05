import React from "react";
import img1 from "../../assets/ahmad-laptop.jpg";
import "./BioHomepage.css";
function BioHomepage() {
  return (
    <section className="home">
      <div className="container">
        <div className="flexxy">
          <div className="flexwidth">
            <div className="info">
              <h1>Omeir Khoder</h1>

              <p>
                {" "}
                Cyber Security Specialist | Hacker.
                <br></br>
                Top 50 Hackers All Time on HackerOne.
                <br></br>
                Managing Director at Resecurity ®.
              </p>
              <button> Biography</button>
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
