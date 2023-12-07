import { useState, useEffect } from 'react';
import logo from '../assets/pink_berry_thing.jpg';



export default function ResumePage() {

  return (
    <body className="container pt-4">
      <h4>Download Resume</h4>
      <hr/>
      <p><a class="text-muted" href="/src/assets/resume.pdf">Here is a link to my resume</a></p>
    </body>
  );
}
