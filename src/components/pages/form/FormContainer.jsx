import { useState, useContext } from "react";
import Formulario from "./Formulario";
import { CartContext } from "../../context/CartContext";
import { db } from "../../../firebase";
import {
  addDoc,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";

const FormContainer = () => {
  const { cart, getTotal, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const funcionDelFormulario = (evento) => {
    evento.preventDefault();
    const total = getTotal();
    // comunicarnos con la api
    const order = {
      buyer: userInfo,
      items: cart, //[ {} {} {}]
      total: total,
    };
    let refCollection = collection(db, "orders");
    addDoc(refCollection, order).then((res) => {
      setOrderId(res.id);
      clearCart();
    });

    let refCol = collection(db, "products");
    order.items.forEach((item) => {
      let refDoc = doc(refCol, item.id);
      updateDoc(refDoc, { stock: item.stock - item.quantity });
    });
  };

  const capturarInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  return (
    <Formulario
      funcionDelFormulario={funcionDelFormulario}
      capturarInfo={capturarInfo}
      userInfo={userInfo}
      orderId={orderId}
    />
  );
};

export default FormContainer;
