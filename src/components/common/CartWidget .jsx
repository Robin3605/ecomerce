// import { FaShoppingCart } from "react-icons/fa";
import { AddToCart } from "./AddToCart";

const CartWidget  = () => {
  return (
    <section className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md">
      <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md">
      <AddToCart />
      
      </button>
    </section>
  )
}

export default CartWidget 