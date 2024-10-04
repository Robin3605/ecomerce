import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";


const CartWidget  = () => {
    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = () => {
        setCartCount(cartCount + 1);
    };

  return (
    <section className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md">
      <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleAddToCart}>
        <FaShoppingCart className="text-xl" />
        <span>{cartCount}</span>
      </button>
    </section>
  )
}

export default CartWidget 