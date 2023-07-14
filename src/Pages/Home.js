import React from "react";
import "./Home.css";
import Header from "../Components/Header";
import Body from "../Components/Body";
import Subscribe from "../Components/Subscribe";

const Home = () => {
  return (
    <div className="home">
      <div className="headerp">
        <Header />
      </div>
      <div className="bodyp">
        <Body />
      </div>
      <div className="subscribe">
        <Subscribe />
      </div>
    </div>
  );
};

export default Home;
