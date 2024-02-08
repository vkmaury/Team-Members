import React, { useState } from "react";
import "../App.css";
import Xyz from "./Xyz";

const TeamMember = () => {
  const [items] = useState([
    {
      img: "person.png",
      name: "VP Name",
      position: "VP,Development & Growth",
    },
    {
      img: "person.png",
      name: "VP Name",
      position: "VP,sales & Marketing",
    },
    {
      img: "person.png",
      name: "VP Name",
      position: "VP,Finance & Operation",
    },
  ]);
  return (
    <div className="container">
      <div className="d-flex justify-content-center m-2">
        <h2 className="bg-primary p-2 text-center text-white">Company Name</h2>
      </div>
      {/* <h2 className=" bg-primary text-white text-center "></h2> */}
      <p className="m-5 text-center">
        Welcome to My Company, Where a dedicated Team of professional words
        together to bring innovation, creativity and expertise to software
        industry get to know the individuals who make our company thrive.
      </p>
      <div className="d-flex justify-content-center m-2">
         <h4  className="bg-primary p-2 text-center text-white">Meet Our Team</h4>
      </div>
      <div className="d-flex justify-content-center m-2">
      <h5 className="m-5 vikas bg-primary p-2 text-center text-white">Leadership / Management Team</h5>
      </div>
      <div>
        <section>
          <div className="container">
            <div className="row">
              <Xyz />
              {items.map((item, i) => (
                <div className="col-sm-4 mb-3">
                  <div className="card">
                    <img
                      src={`../images/${item.img}`}
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
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeamMember;
