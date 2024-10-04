// import { FaShoppingCart } from "react-icons/fa";
import { AddToCart } from "./AddToCart";

export const Card = ({title, description, price, stock, image}) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-2 px-4">
      <div className="flex flex-col items-center justify-center rounded-lg bg-slate-100 shadow-secondary-1 dark:bg-surface-dark h-full">
        <div className="w-full h-48 overflow-hidden py-4">
          <img
            className="rounded-t-lg w-full h-full object-contain"
            src={image}
            alt="" />
        </div>
        <div className="p-4 text-surface dark:text-white w-full">
          <h2 className="mb-2 text-center text-black text-lg font-medium leading-tight">{title}</h2>
          <p className="mb-2 text-center text-black text-sm">{description}</p>
          <p className="mb-2 text-center text-black font-bold">${price}</p>
          <p className="mb-2 text-center text-black text-sm">Stock: {stock}</p>
          
          <div className="flex justify-center">
            <button
              type="button"
              className="inline-block rounded bg-primary px-4 py-2 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light">
              <AddToCart  className="text-xl text-black"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;