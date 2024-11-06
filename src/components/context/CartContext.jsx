import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
      let isInCart = cart.some((el) => el.id === item.id); 

      if (isInCart) {
        let nuevoArray = cart.map((elemento) => {
          if (elemento.id === item.id) {
            return {
              ...elemento,
              quantity: elemento.quantity + item.quantity,
            };
          } else {
            return elemento;
          }
        }); 
  
        setCart(nuevoArray);
      } else {
        
        setCart([...cart, item]);
      }
    };

    const removeFromCart = (itemId) => {
        setCart(cart.filter((item) => item.id !== itemId));
    };

    const isInCart = (id) => {
      const product = cart.find((elemento) => elemento.id === id);
      // return product ? product.quantity : 0
      if (product) {
        return product.quantity;
      } else {
        return 0;
      }
    };

    const getQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    const getTotal = () => {
        return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
    };

    const clearCart = () => {
        setCart([]);
    }
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getQuantity, getTotal, isInCart }}>
      {children}
    </CartContext.Provider>
  )
}

