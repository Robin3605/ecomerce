import Counter from "../../common/Counter"
import { useFetchFirebase } from "../../../utils/hooks/usefirebase";
import Loader from "../../common/Loader";

const ItemDetail = ({ item, agregarAlCarrito, quantityInCart }) => {
  const { loading } = useFetchFirebase();

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="flex justify-center flex-wrap ">
      
        <div  className=" cursor-pointer bg-[#070b3c] text-gray-200 border border-gray-300 rounded-md m-2.5 p-2.5 w-96 hover:translate-x-1 hover:translate-y-1 transform duration-500  hover:bg-[#181b4a] hover:text-slate-100">
          <img src={item.image} alt={item.title} className="w-full h-[340px] rounded-lg" />
          <h2 className="text-lg font-semibold mt-2.5 mb-2.5">{item.title}</h2>
          <h3 className="text-base font-medium mt-2.5 mb-2.5">{item.description}</h3>
          <div className="flex justify-between px-6">
            <p className="text-base font-medium mt-2.5 mb-2.5">${item.price}</p>
            {/* <p className="text-base font-medium mt-2.5 mb-2.5">Stock: {item.stock}</p> */}
            <h3 className="text-base font-medium mt-2.5 mb-2.5">{item.category}</h3>
          </div>
          <Counter stock={item.stock} agregarAlCarrito={agregarAlCarrito} quantityInCart={quantityInCart} />
        </div>
      
    </section>
  )
}

export default ItemDetail


