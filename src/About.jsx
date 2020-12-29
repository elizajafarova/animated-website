import React from "react";
import { NavLink } from "react-router-dom";
import Helpers from "./Helpers";
import web from "../src/images/design.jpg";

const About = () => {
  return (
    <>
      <Helpers
        name="Welcome to About page"
        imgSrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
