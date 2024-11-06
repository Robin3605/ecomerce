import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";


const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);
  let quantityInCartNow = getQuantity();
  return (
    <div className="flex items-center px-4">
      <FaShoppingCart className='cursor-pointer text-3xl text-slate-400 mb-2 hover:text-slate-100 ' />
      <span className='text-2xl text-slate-300 bg-orange-500 rounded-full px-2'>{quantityInCartNow}</span>
    </div>
  )
}

export default CartWidget


