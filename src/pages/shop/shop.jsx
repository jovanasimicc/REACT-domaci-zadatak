import React from "react";
import {BOOKS} from "../../books"
import {Book} from "./book"
import "./shop.css"

export const Shop = () => {
    return (
    <div className="shop">
        <div className="shopTitle">
            <h1>Knjige</h1>
        </div>

        <div className="books">
            {BOOKS.map((book) =>(
                <Book data={book} />
            ))}

        </div>
    </div>
   );
};