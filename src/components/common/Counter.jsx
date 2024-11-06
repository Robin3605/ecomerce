import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import { FaCartPlus } from "react-icons/fa6";


const Counter = ({ stock, agregarAlCarrito, quantityInCart }) => {
    const [contador, setContador] = useState(1);

    const onAdd = () => {
      stock - quantityInCart > contador ? setContador(contador + 1) : alert("agotado");
    };
    const restar = () => {
      contador > 1 && setContador(contador - 1) ;
    };

  return (
    <section>
      <div className="flex justify-center items-center gap-6">
        {
          stock - quantityInCart > contador
            ? <button onClick={onAdd} className="cursor-pointer text-3xl text-slate-400 mb-2 hover:text-slate-100 border-solid border-2 border-slate-400 rounded-lg"><IoAdd /></button>
            : <button className=" display-none text-3xl text-slate-200 mb-2  border-solid border-2 border-slate-400 rounded-lg"><IoAdd /></button> 
        }
        {
           contador  <= stock - quantityInCart
            ? <span className="text-3xl text-slate-300">{contador}</span>
            : <span className="text-3xl text-slate-300">{contador}</span>
        }
        <button onClick={restar}
          className="cursor-pointer text-3xl text-slate-400 mb-2 hover:text-slate-100 border-solid border-2 border-slate-400 rounded-lg"><HiOutlineMinusSmall/>
        </button>
      </div>
      {
        stock - quantityInCart >= contador
          ? <button onClick={() => agregarAlCarrito(contador)}
            className="cursor-pointer text-3xl text-slate-400 mb-2 hover:text-slate-100  rounded-lg"><FaCartPlus /></button>
          : <button className="cursor-pointer text-3xl text-slate-400 mb-2 hover:text-slate-100 border-solid border-2 border-slate-400 rounded-lg"><FaCartPlus /></button>
      }
    </section>
  )
}

export default Counter


