

import ItemListContainer from "../common/ItemListContainer";


export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2">
      <img className="w-34 h-14 px-4 rounded-3xl" src='https://res.cloudinary.com/dmxjhhhfy/image/upload/v1728071797/Captura_de_pantalla_2024-10-04_a_la_s_2.55.49_p.m._tljvel.png' alt="logo" />
      
      <ItemListContainer />
    </nav>
  )
}

export default Navbar;