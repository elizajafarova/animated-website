import React from "react";
import { NavLink } from "react-router-dom";
import Helpers from "./Helpers";
import web from "../src/images/6c1f1d55a37558b1bd317fb83ec55acd (1).jpg";

const Home = () => {
  return (
    <>
      <Helpers
        name="Grow your business with "
        imgSrc={web}
        visit="/services"
        btname="Get started"
      />
    </>
  );
};

export default Home;
