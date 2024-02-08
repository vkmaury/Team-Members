import React, { useState } from "react";
import "../App.css";
import img1 from "../images1/person.png"

const Sales = () => {
    const [items] = useState([
        {
          img: "person.png",
          name: "Founder Name",
          position: "Marketing Officer",
        },
        {
          img: "person.png",
          name: "Founder Name",
          position: "Marketing Officer",
        },
        {
            img: "person.png",
            name: "Founder Name",
            position: "Marketing Officer",
          },
      ]);
  return (
    <div className="row">
    <div className="col-sm-2"></div>
    {items.map((item1, i) => (
      <div className="col-sm-3 mb-5">
        <div className="card">
          <img
            src={img1}
            className="card-img-top rounded-circle w-50 m-auto"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{item1.name}</h5>
            <p className="card-text">{item1.position}</p>
          </div>
        </div>
      </div>
    ))}
    <div className="col-sm-2"></div>
  </div>
  )
}

export default Sales
