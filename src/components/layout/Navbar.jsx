import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import CartWidget from "../common/CartWidget";
// import { useCart } from "../common/CartProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
//   const { cartCount } = useCart();
  const [openMenu, setOpenMenu] =  useState(false)

  
  return (
    <nav className='flex justify-between items-center'>
        <div className='flex gap-4 px-4 py-4'>
            <Link to='/'>
                <img src="https://i.pinimg.com/564x/3b/23/66/3b2366b0b6508869c4084867f7e591e5.jpg"  alt="logo" 
                className='w-16 h-16 object-contain rounded-full'
                />
            </Link>
            <div className='hidden md:flex px-6'>
                <ul className='flex gap-4 list-none mt-4'>
                    <Link to='/'><li className='cursor-pointer hover:text-white'>Home</li></Link>
                    <Link to='/category/Watch'><li className='cursor-pointer hover:text-white'>SmartWatch</li></Link>
                    <Link to='/category/SmartPhone'><li className='cursor-pointer hover:text-white'>Iphone</li></Link>
                    <Link to='/category/Airpods'><li className='cursor-pointer hover:text-white'>Airpods</li></Link>
                    <Link to='/category/Computers'><li className='cursor-pointer hover:text-white'>MacBook</li></Link>
                </ul>
            </div>
        </div>
        <div className='flex items-center'>
            <div className='md:hidden'>
                <RxHamburgerMenu className='cursor-pointer text-3xl' onClick={() => setOpenMenu(!openMenu)}/>
            </div>
            <Link to={'/cart'} className='mx-4 my-4 flex items-center'>
                  <CartWidget className='cursor-pointer text-2xl text-slate-300 hover:text-white'/>
                {/* <span className='text-2xl text-slate-300'>{cartCount}</span> */}
                <span className='text-2xl text-slate-300'>0</span>
            </Link>
        </div>
        {openMenu && (
            <div className='absolute top-14 left-60 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-start z-10 py-4'>
                <div className='bg-white p-4 rounded-lg'>
                    <IoMdClose className='cursor-pointer text-3xl text-black' onClick={() => setOpenMenu(!openMenu)}/>
                    <ul className='list-none text-black'>
                        <li className='cursor-pointer py-2'><a to='/'>Home</a></li>
                        <li className='cursor-pointer py-2'><a to='/about'>About</a></li>
                        <li className='cursor-pointer py-2'><a to='/products'>Products</a></li>
                        <li className='cursor-pointer py-2'><a to='/pay'>Pay</a></li>
                    </ul>
                </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar