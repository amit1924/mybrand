import React from "react";
import Shoe from "./shoes2.jpg";
import Flipkart from './flipkart.png';
import Amazon from './amazon.jpg';
import "./Herosection.css"; // Import the CSS file for styling

const Herosection = () => {
 
  return (
    
    
    <main className="hero">
      <div className="hero-content">
        <div className="shopping">
          <p className="shopping-label">Also available on
          below mentioned website</p>
          <div className="shoe-img">
            <img src={Shoe} alt="Shoe" />
          </div>
        </div>

        <div className="hero-text">
          <h1 className="hero-title">Your Feet Deserve The Best</h1>
          <p className="hero-description">Your feet deserve the best We’ve teamed up with Pendleton Woolen Mills, an Oregon original. .</p>

          <div className="hero-btn">
          <button onClick={() => window.open('https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off')} className="hero-btn-primary flipkart-button">
              <img src={Flipkart} alt="Flipkart" />
             Flipkart
            </button>
            <button onClick={() => window.open('https://www.amazon.in/s?k=shoes&crid=JNB80ZVDFNN8&sprefix=shoe%2Caps%2C314&ref=nb_sb_noss_2')} className="hero-btn-primary amazon-button">
              <img src={Amazon} alt="Amazon" />
          Amazon
            </button>
          </div>
        </div>
      </div>
      <div className="hero-image"></div>
    </main>
  );
};

export default Herosection;
