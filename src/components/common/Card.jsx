import { Link } from "react-router-dom";


const Card = ({id, title, price, image, category}) => {
  return (
    <section className="flex justify-center flex-wrap ">
      
        <div key={id} className="border border-gray-300 rounded-md m-2.5 p-2.5 w-72 hover:translate-x-1 hover:translate-y-1 transform duration-500  hover:bg-[#171b51] hover:text-slate-100 ">
          <img src={image} alt={title} className="w-full h-[240px] rounded-lg" />
          <h2 className="text-lg font-semibold mt-2.5 mb-2.5">{title}</h2>
          
          <div className="flex justify-between px-6">
            <p className="text-base font-medium mt-2.5 mb-2.5">${price}</p>
            
            <h3 className="text-base font-medium mt-2.5 mb-2.5">{category}</h3>
          </div>
          
          <div className="flex justify-center items-center">
            <Link to={`/Detail/${id}`} className="flex  w-[150px] justify-center items-center text-center border-solid border-2 border-slate-400 rounded-lg hover:bg-slate-50 hover:text-slate-900">
              <button className="justify-center items-center text-center py-2">More</button>
            </Link>
          </div>
        </div>
      
    </section>
  )
}

export default Card
