import { useEffect, useState, useContext } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { toast } from "sonner";
import Loader from "../../common/Loader";

const ItemDetailContainer = () => {
  const { addToCart, isInCart } = useContext(CartContext);

  const { id } = useParams();

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const quantityInCart = isInCart(id);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true); 
      try {
        const productsCollection = collection(db, "products");
        const docRef = doc(productsCollection, id);
        const res = await getDoc(docRef); 
        setItem({ ...res.data(), id: res.id });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); 
      }
    };

    getProduct();

    return () => {
      setItem({});
    };
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let objeto = { ...item, quantity: cantidad };
    addToCart(objeto);
    toast.success("Product added successfully", {
      position: "bottom-right",
      closeButton: true,
      background: "green",
    });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <ItemDetail
      item={item}
      agregarAlCarrito={agregarAlCarrito}
      quantityInCart={quantityInCart}
    />
  );
};

export default ItemDetailContainer;
