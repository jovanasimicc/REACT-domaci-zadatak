import React from "react";
import {BOOKS} from "../../books"
import {Book} from "./book"
import "./shop.css"

import { useNavigate } from "react-router-dom";

export const Shop = () => {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = "/Search"; 
    navigate(path);
  }

    return (
    <div className="shop">
        <div className="shopTitle">
            <h1>Knjige</h1>
        </div>

        <button className="searchBtn" onClick={routeChange}>Pretražite naslove</button>
        

    <div className="books">
            {BOOKS.map((book) =>(
                <Book data={book} />
            ))}

        </div>
        </div>
   );
};