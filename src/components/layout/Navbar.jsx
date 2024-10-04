
import { DarkMode } from "../common/DarkMode";
import ItemListContainer from "../common/ItemListContainer";


export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2">
      <img className="w-34 h-20 px-4" src='https://res.cloudinary.com/dmxjhhhfy/image/upload/v1728050293/30Sep24_Anis_Online_Store_Free_Upload_jtkbjb.png' alt="logo" />
      <DarkMode />
      <ItemListContainer />
    </nav>
  )
}

export default Navbar;