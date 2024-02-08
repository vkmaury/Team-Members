import React, { useState } from "react";
import "../App.css";
import Development from "./Development";
import img1 from "../images1/person.png"

const DevelopmentTeam = () => {
    const [items3] = useState([
        {
          img: "person.png",
          name: "Developer Name",
          position: "Team Lead , SE",
        },
        {
          img: "person.png",
          name: "Developer Name",
          position: "Software Engineering",
        },
        {
          img: "person.png",
          name: "Developer Name",
          position: "Software Engineering",
        },
        {
            img: "person.png",
            name: "Developer Name",
            position: "Software Engineering",
          },
      ]);
  return (
    <div className='container'>
        <div className="d-flex justify-content-center m-2">
        <h5 className='mt-5 bg-primary p-2 text-center text-white'>Development Team</h5>
        </div>
        
        <div>
        <section>
          <div className="container mt-5">
            <div className="row">
              
              {items3.map((item, i) => (
                <div className="col-sm-3 mb-3">
                  <div className="card">
                    <img
                      src={img1}
                      className="card-img-top rounded-circle w-50 m-auto"
                      alt="..." 
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.position}</p>
                    </div>
                  </div>
                </div>
              ))}
              <Development/>
            </div>
          </div>
        </section>
      </div>
      
    </div>
  )
}

export default DevelopmentTeam
