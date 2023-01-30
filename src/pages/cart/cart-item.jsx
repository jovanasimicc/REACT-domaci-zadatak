import React, {useContext} from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
    const {id, bookName, author, price, bookImage} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);

    return <div className="cartItem">
        <img src={bookImage} />
        <div className="description">
            <p><b>{bookName}</b></p>
            <p>{author}</p>
            <p>{price} dinara</p>

            <div className="countHandler">
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>
}