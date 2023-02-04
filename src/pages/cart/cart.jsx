import React, {useContext} from "react";
import { BOOKS } from "../../books";
import { ShopContext } from "../../context/shop-context";
import {CartItem} from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
    const {cartItems, getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    return (
    <div className="cart">
        <div>
        <h1>Vaša korpa</h1>
        </div>

        <div className="cartItems">
            {BOOKS.map((book) => {
                if(cartItems[book.id] !== 0) {    // vec je u korpi
                return <CartItem data={book} />
                }
            } )}
        </div>

        {totalAmount > 0 ? (
        <div className="checkout">
            <p>Ukupno: {totalAmount} dinara</p>
            <button onClick={() => navigate("/")}>Nazad</button>
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        </div>
         ) : ( <h2>Vaša korpa je prazna!</h2> )}  <br /> <br />

    </div>
    )
}