import React from "react";

export const Book = (props) => {
    const {id, bookName, author, price, bookImage} = props.data;
    return <div className="book">
        <img src={bookImage} />
        
        <div className="description">
            <p>{bookName}, {author}</p>
            <p>{price} dinara</p>
        </div>
    </div>
}
