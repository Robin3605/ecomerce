import { useState } from "react";
import Formulario from "./Formulario";


const FormContainer = () => {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    
      const funcionDelFormulario = (e) => {
        e.preventDefault();
        console.log("se envia");
        console.log(userInfo);

        setUserInfo({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      };
    
    
      const capturarInfo = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
      };
  return (
    <Formulario funcionDelFormulario = {funcionDelFormulario} capturarInfo = {capturarInfo} userInfo = {userInfo} />
  )
}

export default FormContainer