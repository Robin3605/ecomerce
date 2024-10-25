import Counter from "../../common/Counter"

const ItemDetail = ({ item, agregarAlCarrito }) => {
  return (
    <section className="flex justify-center flex-wrap ">
      
        <div  className=" cursor-pointer bg-gray-600 text-gray-200 border border-gray-300 rounded-md m-2.5 p-2.5 w-96 hover:translate-x-1 hover:translate-y-1 transform duration-500  hover:bg-[#505050] hover:text-slate-100">
          <img src={item.image} alt={item.title} className="w-full h-[340px] rounded-lg" />
          <h2 className="text-lg font-semibold mt-2.5 mb-2.5">{item.title}</h2>
          <h3 className="text-base font-medium mt-2.5 mb-2.5">{item.description}</h3>
          <div className="flex justify-between">
            <p className="text-base font-medium mt-2.5 mb-2.5">${item.price}</p>
            <p className="text-base font-medium mt-2.5 mb-2.5">Stock: {item.stock}</p>
            <h3 className="text-base font-medium mt-2.5 mb-2.5">{item.category}</h3>
          </div>
          <Counter stock={item.stock} agregarAlCarrito={agregarAlCarrito} />
        </div>
      
    </section>
  )
}

export default ItemDetail

{/* <Counter stock={item.stock} agregarAlCarrito={agregarAlCarrito} /> */}
