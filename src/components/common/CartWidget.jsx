
import { FaShoppingCart } from "react-icons/fa";


const CartWidget = () => {
  return (
    <div className="flex items-center px-4">
      <FaShoppingCart className='cursor-pointer text-2xl text-slate-400 mb-2 hover:text-slate-100 ' />
      <span className='text-2xl text-slate-300'>1</span>
    </div>
  )
}

export default CartWidget
