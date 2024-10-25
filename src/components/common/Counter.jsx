import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import { FaCartPlus } from "react-icons/fa6";


const Counter = ({ stock, agregarAlCarrito }) => {
    const [contador, setContador] = useState(0);

    const sumar = () => {
      stock > contador ? setContador(contador + 1) : alert("stock maximo");
    };
    const restar = () => {
      contador >0 && setContador(contador - 1) ;
    };

  return (
    <section>
      <div className="flex justify-center items-center gap-6">
        <button onClick={sumar}
          className="cursor-pointer text-3xl text-slate-400 mb-2 hover:text-slate-100 border-solid border-2 border-slate-400 rounded-lg">
            <IoAdd/>
        </button>
        <h2 className="text-3xl text-slate-400 mb-2 ">{contador}</h2>
        <button onClick={restar}
          className="cursor-pointer text-3xl text-slate-400 mb-2 hover:text-slate-100 border-solid border-2 border-slate-400 rounded-lg"><HiOutlineMinusSmall/>
        </button>
      </div>
      <button onClick={() => agregarAlCarrito(contador)}
        className="cursor-pointer text-3xl text-slate-400 mb-2 hover:text-slate-100 px-3"
        ><FaCartPlus  />
      </button>
    </section>
  )
}

export default Counter

// import { useState } from "react";

// const Counter = ({ stock, agregarAlCarrito }) => {
//   // 10 - 10
//   const [contador, setContador] = useState(0);

//   const sumar = () => {
//     // if (stock > contador) {
//     //   setContador(contador + 1);
//     // } else {
//     //   alert("stock maximo");
//     // }
//     stock > contador ? setContador(contador + 1) : alert("stock maximo");
//   };
//   const restar = () => {
//     setContador(contador - 1);
//   };

//   return (
//     <div
//       style={{
//         margin: "50px",
//       }}
//     >
//       <button onClick={sumar}>sumar</button>
//       <h2>Contador = {contador}</h2>
//       <button onClick={restar}>restar</button>

//       <button onClick={() => agregarAlCarrito(contador)}>
//         Agregar al carrito
//       </button>
//     </div>
//   );
// };

// export default Counter;
