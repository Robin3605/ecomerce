import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export const AddToCart = () => {
    const [cart, setCart] = useState(0);

    const handleClick = () => {
        setCart(cart + 1);
    }

  return (
    <div>
        <FaShoppingCart className="text-xl text-black" onClick={handleClick} cart={cart}/>
        <span className="text-white">{cart}</span>
    </div>
  )
}
