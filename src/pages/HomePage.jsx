import { useState, useEffect } from 'react';
import logo from '../assets/pink_berry_thing.jpg';


import API from '../utils/API';

export default function HomePage() {

  return (
    <body className="container pt-4">
      <h4>About Me</h4>
      <img src={logo} style={{width: 100}}/>
      <hr/>
      <p>My name is Ella Tran, and I am an intermediate coder. I recently began coding in JavaScript with a bit of HTML and CSS. To improve my coding skills, I decided to take the University of Texas at Austin's coding bootcamp. In this class, I learned how to improve my coding skills for future professions.</p>
    </body>
  );
}
