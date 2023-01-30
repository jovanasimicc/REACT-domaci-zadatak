import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Book = (props) => {
    const {id, bookName, author, price, bookImage} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);

    const cartItemAmount = cartItems[id];

    return <div className="book">
        <img src={bookImage} />
        
        <div className="description">
            <p><b>{bookName}</b></p>
            <p>{author}</p>
            <p>{price} dinara</p>
        </div>

        <button className="addToCartBtn" onClick={() => addToCart(id)}>
            Dodaj u korpu {cartItemAmount > 0 && <> ({cartItemAmount})</>}
        </button>
    </div>
}
