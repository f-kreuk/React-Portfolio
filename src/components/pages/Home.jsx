import React from 'react';
import '../../index.css';
import '../../App.css';
import profilePicture from '../../assets/Florian.png';

export default function Home() {
  return (
    <div className="container row box">
      <div className="col-md-6 text-right my-auto">
        <div>
          <h1>Florian Kreuk</h1>
          <p>
          Attorney and Programmer
        </p>
        </div>
        </div>
        <div className="col-md-4">
        <img src={profilePicture} alt="Florian Kreuk" />

        </div>
      </div>
  );
}
