import { Box, Typography } from "@mui/material";
import React from "react";
import "./About.css";

document.body.style.backgroundColor = "black";

//<body class="some-page-reference"></body>
const About = () => {
  return (
    <><div class="fade"></div><section class="star-wars">

          <div class="crawl">

              <div class="title">
                  <p>Project 2 </p>
                  <h1>The Market Website</h1>
              </div>

              <p>After surviving the first project where the objective was to make a video game. We have moved to the 2nd phase, the market website store.</p>
              <p>This site was designed as a backend project for Per Scholas. It was upgraded to include a front end with React.</p>
              <p>User is able to Create, Read, Update, and Delete items from the bookstore website. They can navigate from any screen to the home page, an all books index , an about us section, and to a add a new book option.</p>
              <p>User also has the ability to add or edit a book from the website using a form.</p>
              <p>Hope you enjoy!</p>
              <p>Per Scholas Fall Class of 2022</p>
              <p>Henry Murillo</p>
                <p>COMING SOON PHASE 3 REACT......</p>
          </div>

      </section></>
  );
};

export default About;