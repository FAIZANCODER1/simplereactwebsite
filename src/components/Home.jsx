import React from 'react';
import homepic from "../img/buss.jpg"
import { NavLink } from 'react-router-dom';
import Common from './Common';

const Home = () => {
  return <div>

<Common
name="Groww your Business With" imgsrc={homepic} visit="/Service" btname="Get Started"
/>

  </div>;
};

export default Home;


