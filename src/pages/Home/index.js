import React from "react";

import Slider from "./Slider";
import Card from "../../components/Card";

const Home = () => {
  return (
    <div>
      <Slider />
      <div style={{ display: "flex", width: "100%" }}>
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
