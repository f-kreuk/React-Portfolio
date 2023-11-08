import React from 'react';
import '../../index.css';
import '../../App.css';
import profilePicture from '/assets/Florian.png';

export default function Home() {
  return (
    <div>
      <div className="row box">

        <div className="col-md-6 text-right my-auto">
          <div>
            <h1 className="signature">Florian Kreuk</h1>
            <p>
              Attorney and Programmer
            </p>
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6">
                <p className="ml-5">
                  Fueled by my unique blend of legal expertise and programming proficiency, I've honed my skills as a solutions architect specializing in PI law firms.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <img src={profilePicture} alt="Florian Kreuk" />
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row">
          <div className="col-md-1">
            <p className="dot ml-2 p-4 mt-2 bold">HTML</p>
          </div>
          <div className="col-md-1">
          <p className="dot ml-2 p-4 mt-2 bold">CSS</p>
          </div>
          <div className="col-md-1">
          <li className="dot ml-2 p-4 mt-2 bold">JavaScript</li>
          </div>
          <div className="col-md-1">
          <li className="dot ml-2 p-4 mt-2 bold">MySQL</li>
          </div>
          <div className="col-md-1">
          <li className="dot ml-2 p-4 mt-2 bold">Node</li>
          </div>
          <div className="col-md-1">
          <li className="dot ml-2 p-4 mt-2 bold">MongoDB</li>
          </div>
          <div className="col-md-1">
          <li className="dot ml-2 p-4 mt-2 bold">Handlebars</li>
          </div>
          <div className="col-md-1">
          <li className="dot ml-2 p-4 mt-2 bold">React</li>
          </div>
          <div className="col-md-1">
          <li className="dot ml-2 p-4 mt-2 bold">ORM</li>
          </div>
          <div className="col-md-1">
          <li className="dot ml-2 p-4 mt-2 bold">MERN</li>
          </div>
          <div className="col-md-1">
          <li className="dot ml-2 p-4 mt-2 bold">PWA</li>
          </div>
          <div className="col-md-1">
          <li className="dot ml-2 p-4 mt-2 bold">Inquirer</li>
          </div>
          </div>
        </div>
  );
}
