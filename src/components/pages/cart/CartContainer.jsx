import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";

const CartContainer = () => {
  const { cart, clearCart, removeFromCart, getTotal } = useContext(CartContext);
  const total = getTotal();
  return (
    <section className=" px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
      {cart.map((item) => (
        <div key={item.id} className=" px-4 border border-gray-300 rounded-md p-4 flex flex-1">
          <img src={item.image} alt={item.title} className="w-[200px] h-[200px] object-cover rounded-lg"/>
          <div className="mt-4 px-4 justify-center items-center text-center">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <h3 className="text-base font-medium">${item.price}</h3>
            <h3 className="text-base font-medium">Quantity: {item.quantity}</h3>
          </div>
          <button 
          className=" px-4 w-[60px] h-[60px] mt-4 cursor-pointer text-base text-slate-400 hover:text-slate-100 border-solid border-2 border-slate-400 rounded-lg hover:bg-red-400"
          onClick={() => removeFromCart(item.id)}
          ><FaTrashAlt/></button>
        </div>
      ))}
      <div>
        {cart.length > 0 ? 
          <button
          onClick={() => clearCart()}
          className="w-[130px] h-[50px] mt-4 cursor-pointer text-base text-slate-400 hover:text-slate-100 border-solid border-2 border-slate-400 rounded-lg text-bold hover:bg-blue-500"
          
          >Clean Up</button>
          : 
            <h2 className="text-lg font-semibold">The cart is empty</h2>
          
        }

        {
          cart.length > 0 && (
            <div className="py-4">
              <h2 className="text-lg font-semibold">Total: $ {total} </h2>
              <Link to='/form' className="flex  py-4">
              <button className=" w-[150px] h-[50px] text-xl items-center justify-center text-center text-gray-300 border-solid border-2 border-slate-400 rounded-lg hover:bg-slate-50 hover:text-slate-900 px-2 py-2">Checkout</button>
              </Link>
          </div>
          )
        }
      </div>
    </section>
  );
};

export default CartContainer;
