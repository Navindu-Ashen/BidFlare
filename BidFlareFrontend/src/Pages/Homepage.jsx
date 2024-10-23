import React from 'react';
import './styles.css';  // Import the CSS file

const Homepage = () => {
  return (
    <div className="container">
      <div className="card">
        <img src="https://mclaren.scene7.com/is/image/mclaren/720S-Coupe_hero:crop-16x9?wid=1920&hei=1080" alt="McLaren 720s" className="car-image" />
        <h2>2021 McLaren 720s</h2>
        <p className="price">$260,000</p>
        <button className="btn bid">Place Bid</button>
        <button className="btn details">View Details</button>
      </div>

      <div className="card">
        <img src="https://hips.hearstapps.com/hmg-prod/images/2020-rolls-royce-ghost-mmp-1-1585172707.jpg?crop=0.987xw:0.658xh;0,0.250xh&resize=1200:*" alt="Rolls Royce Ghost" className="car-image" />
        <h2>2020 Rolls Royce Ghost</h2>
        <p className="price">$299,000</p>
        <button className="btn bid">Place Bid</button>
        <button className="btn details">View Details</button>
      </div>

      <div className="card">
        <img src="https://newsroom.cdn.bugatti-media.com/2af840ac-ce59-44e2-a556-0c030a7dc50c/xl" alt="Bugatti Veyron Vision GT" className="car-image" />
        <h2>Bugatti Veyron Vision GT</h2>
        <p className="price">$2,555,000</p>
        <button className="btn bid">Place Bid</button>
        <button className="btn details">View Details</button>
      </div>

      <div className="card">
        <img src="https://www.topgear.com/sites/default/files/2023/04/1%20Bentley%20Flying%20Spur%20Speed.jpg" alt="Bentley Flying Spur" className="car-image" />
        <h2>Bentley Flying Spur</h2>
        <p className="price">$319,000</p>
        <button className="btn bid">Place Bid</button>
        <button className="btn details">View Details</button>
      </div>
    </div>
  );
};

export default Homepage;
