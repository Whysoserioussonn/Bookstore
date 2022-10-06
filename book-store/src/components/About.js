import { Box, Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="About">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
        This site was designed as a <br></br>backend project for Per Scholas. <br></br>  It was upgraded to include
          a front end with React. <br></br> User is able to Create, Read, Update, and Delete items from bookstore website.<br></br>
          Hope you enjoy!<br></br>
          Per Scholas Fall Class of 2022<br></br>
          Henry Murillo  
        </Typography>
       
      </Box>
    </div>
  );
};

export default About;