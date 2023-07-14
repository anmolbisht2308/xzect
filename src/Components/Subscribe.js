import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribes">
      <h1>Subscribe to Maktub</h1>
      <p>Get the latest posts delivered right to your email.</p>

      <div className="subscribebutton">
        <div className="inputemail">
          <input placeholder="Enter your email address" />
        </div>
        <div className="inputbutton">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
