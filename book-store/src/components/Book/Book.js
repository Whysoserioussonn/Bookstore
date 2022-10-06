import React from 'react'
import { Button } from "@mui/material";
import "./Book.css";

const Book = (props) => {
    const { _id, name, author, description, price, image } = props.book;
    return (
        <div className="card">
          <img src={image} alt={name} />
          <article>By {author}</article>
          <h3>{name}</h3>
          <p>{description}</p>
          <h3>Price$ {price}</h3>
          <Button >
            Update
          </Button>
          <Button >
            Delete
          </Button>
        </div>
      );
    };
    
    export default Book;