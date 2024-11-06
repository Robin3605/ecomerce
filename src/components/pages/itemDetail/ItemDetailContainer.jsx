
import { useEffect, useState, useContext } from "react";
import { products } from "../../../products";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const ItemDetailContainer = () => {
  const {addToCart, isInCart} = useContext(CartContext);
  
  const { id } = useParams();
  
  const [item, setItem] = useState({});
  const quantityInCart = isInCart(id);

  useEffect(() => {
    let productSelected = products.find((producto) => producto.id === id);
    setItem(productSelected);
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let objeto = {...item, quantity: cantidad};
    addToCart(objeto);
  };

  return <ItemDetail item={item} agregarAlCarrito={agregarAlCarrito} quantityInCart={quantityInCart} />;
};

export default ItemDetailContainer;


