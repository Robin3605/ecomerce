import { Link } from "react-router-dom";

const Formulario = ({
  funcionDelFormulario,
  capturarInfo,
  userInfo,
  orderId,
}) => {
  console.log(userInfo);
  if (orderId) {
    return (
      <>
        <section className="flex justify-center flex-wrap py-6">
          <div className="border border-gray-300 rounded-md m-2.5 p-2.5 w-96 hover:translate-x-1 hover:translate-y-1 transform duration-500  hover:bg-[#181b4a] hover:text-slate-100">
            <h1 className="text-lg font-semibold mt-2.5 mb-2.5">
              Gracias por tu compra
            </h1>
            <h3 className="text-base font-medium mt-2.5 mb-2.5">
              El id de tu compra es: {orderId}
            </h3>
          </div>
        </section>
        <Link to="/" className="flex justify-center items-center py-4 ">
          <button className="flex justify-center items-center text-center border-solid border-2 border-slate-400 rounded-lg hover:bg-slate-50 hover:text-slate-900 h-[40px] w-[130px]">
            Go Home
          </button>
        </Link>
      </>
    );
  }

  return (
    <>
      <Link to="/cart" className="flex justify-center items-center py-4 bg-gray-700">
        <h1 className="font-bold text-2xl">Go Back</h1>
      </Link>
      <section className="flex justify-center flex-wrap bg-gray-800 p-10 rounded-lg shadow-lg h-screen">
        <form onSubmit={funcionDelFormulario} action="" className="w-80 pt-10">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="text-lg font-semibold mb-2 text-white"
            >
              Nombre
            </label>
            <input
              onChange={capturarInfo}
              type="text"
              placeholder="Nombre"
              name="name"
              className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-lg font-semibold mb-2 text-white"
            >
              Email
            </label>
            <input
              onChange={capturarInfo}
              type="email"
              placeholder="Email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="text-lg font-semibold mb-2 text-white"
            >
              Teléfono
            </label>
            <input
              onChange={capturarInfo}
              type="tel"
              placeholder="Teléfono"
              name="phone"
              className="w-full p-2 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            />
          </div>
         
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300"
          >
            Enviar
          </button>
        </form>
      </section>
    </>
  );
};

export default Formulario;
