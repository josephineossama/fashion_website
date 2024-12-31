// import React from 'react'
// import { useState } from "react";
import "./NewArrivals.css";
// import button from "../button/Button";

const NewArrivals = () => {
  // const [Count, setCount] = useState(0);
  return (
    <>
      {/* <div>
        <p>welcome to my counter</p>
      </div>
      <div>
        <p>count:{Count}</p>
      </div>

      <div>
        <button  className="buttonhole" onClick={() => setCount(Count + 5)}>add5</button>
        <button  className="buttonhole" onClick={() => setCount(0)}>reset</button> 
      </div> */}
      <section className="new-arrivals">
        <h2>New Arrivalss</h2>
        <div className="new-arrivals-container">
          <div className="new-arrivals-item">
            <img src="images/new-arrivals-1.jpg" alt="new-arrivals-1" />
            <h3>Product 1</h3>
            <p>$100</p>
          </div>
          <div className="new-arrivals-item">
            <img src="images/new-arrivals-2.jpg" alt="new-arrivals-2" />
            <h3>Product 2</h3>
            <p>$200</p>
          </div>
          <div className="new-arrivals-item">
            <img src="images/new-arrivals-3.jpg" alt="new-arrivals-3" />
            <h3>Product 3</h3>
            <p>$300</p>
          </div>
          <div className="new-arrivals-item">
            <img src="images/new-arrivals-4.jpg" alt="new-arrivals-4" />
            <h3>Product 4</h3>
            <p>$400</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
