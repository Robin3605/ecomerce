// import { useState } from "react"

const Formulario = ({funcionDelFormulario, capturarInfo, userInfo}) => {
    console.log(userInfo)
//   const [userInfo, setUserInfo] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     });

//   const funcionDelFormulario = (evento) => {
//     evento.preventDefault();
//     console.log("se envia");
//     console.log(userInfo);
//   };


//   const capturarInfo = (evento) => {
//     console.log(evento.target.value);
//     console.log(evento.target.name);
//     const { name, value } = evento.target;
//     setUserInfo({ ...userInfo, [name]: value });
    
//   };

  return (
    <section className="flex justify-center flex-wrap bg-gray-800 p-10 rounded-lg shadow-lg">
        <form onSubmit={funcionDelFormulario} action="" className="w-80">
            <div className="mb-4">
                <label htmlFor="name" className="text-lg font-semibold mb-2 text-white">Nombre</label>
                <input onChange={capturarInfo} type="text" placeholder="Nombre" name="name" className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"/>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="text-lg font-semibold mb-2 text-white">Email</label>
                <input onChange={capturarInfo} type="email" placeholder="Email" name="email" className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"/>
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="text-lg font-semibold mb-2 text-white">Teléfono</label>
                <input onChange={capturarInfo} type="tel" placeholder="Teléfono" name="phone" className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"/>
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="text-lg font-semibold mb-2 text-white">Mensaje</label>
                <textarea onChange={capturarInfo} placeholder="Escriba su mensaje" name="message" className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"></textarea>
            </div>
            <button type="submit" className="w-full p-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300">Enviar</button>
        </form>
        
    </section>
  )
}

export default Formulario