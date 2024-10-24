// import { FaCartPlus } from "react-icons/fa6";
// import { useCart } from "./CartProvider";

// const CartWidget = () => {
//   const { addToCart } = useCart(); // Obtener la función para agregar al carrito

//   return (
//     <section>
//       <FaCartPlus
//         onClick={() => {
//           addToCart(); // Llama a la función para agregar al carrito
//         }}
//         className='cursor-pointer text-2xl text-slate-400 mb-2 hover:text-slate-100' 
//       />
//     </section>
//   );
// }

// export default CartWidget

import { FaShoppingCart } from "react-icons/fa";


const CartWidget = () => {
  return (
    <div>
      <FaShoppingCart className='cursor-pointer text-2xl text-slate-400 mb-2 hover:text-slate-100 ' />

    </div>
  )
}

export default CartWidget
