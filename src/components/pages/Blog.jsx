import React from 'react';
import '../../index.css';
import '../../App.css';


export default function Blog() {
  return (
    <div>
      <h1 className="signature text-center mt-5 mb-5">Projects</h1>
      <div className="row">
        
        <div className="container col-md-5 card ml-2 mr-2">
          <h3 className="signature h3 text-center">CalorieQuest</h3>
          <p>Calorie Quest is a web-based calorie tracker app designed to help users manage their calorie intake, track their progress towards weight goals, and make healthier lifestyle choices.</p>
          <a href="https://github.com/f-kreuk/CalorieQuest/tree/main">
            <img src="../assets/CQuest.JPG" alt="CalorieQuest" className="project-image mb-4" />
          </a>
        </div>
        <div className="container col-md-5 card ml-2 mr-2">
          <h3 className="signature h3 text-center">5-day-weather</h3>
          <p>The purpose of this website is to generate a five day weather forecast utilizing the openweathermap API. The website will store the user's city searches in local storage and permit the user to revisit the prior city searches by selecting them.</p>
          <a href="https://github.com/f-kreuk/5-day-weather/tree/main">
            <img src="../assets/5-day-weather.PNG" alt="5-day-weather" className="project-image mb-4" />
          </a>
        </div>
        
        <div className="container col-md-5 card ml-2 mr-2">
          <h3 className="signature h3 text-center">Note-Taker</h3>
          <p>The Note-Taker application writes and saves notes utilizing an Express.js back-end that will save and retrieve note data from a JSON file. The application is deployed at the following url: https://limitless-wildwood-41425-18aaa46d498f.herokuapp.com/</p>
          <a href="https://github.com/f-kreuk/Note-Taker">
            <img src="../assets/NoteTaker.JPG" alt="Note-Taker" className="project-image mb-4" />
          </a>
        </div>

        <div className="container col-md-5 card ml-2 mr-2">
          <h3 className="signature h3 text-center">code-quiz</h3>
          <p>The purpose of this website is to generate a timed coding quiz for users to test their knowledge of JS. The website will store the user's scores in local storage.", </p>
          <a href="https://github.com/f-kreuk/code-quiz">
            <img src="../assets/code-quiz.JPG" alt="code-quiz" className="project-image mb-4" />
          </a>
        </div>

        <div className="container col-md-5 card ml-2 mr-2">
          <h3 className="signature h3 text-center">E-commerce-Back-End</h3>
          <p>The E-commerce-Back-End showcases the back end development of an internet retail company's e-commerce site using the latest technologies. This involves setting up the database connection, initializing and seeding the database, starting the server, and then successfully interacting with the API endpoints for the website using Insomnia Core and various CRUD (create, read, update, and delete) operations.</p>
          <a href="https://github.com/f-kreuk/E-commerce-Back-End/tree/main">
            <img src="../assets/ecBackend.JPG" alt="E-commerce-Back-End" className="project-image mb-4" />
          </a>
        </div>

        <div className="container col-md-5 card ml-2 mr-2">
          <h3 className="signature h3 text-center">Social-Network-API</h3>
          <p>This project is a NoSQL challenge called Social Network API, which involves building an API for a social network web application. The goal is to create a platform where users can share their thoughts, react to their friends' thoughts, and manage a friend list. The technology stack includes Express.js for routing, a MongoDB database, and the Mongoose ODM.", </p>
          <a href="https://github.com/f-kreuk/Social-Network-API/tree/main">
            <img src="../assets/snAPI.JPG" alt="Social-Network-API" className="project-image mb-4" />
          </a>
        </div>

      </div>
      
    </div>

  );
}
