
// import { CartProvider } from "./components/common/CartProvider"
import Navbar from "./components/layout/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer"
import CartContainer from "./components/pages/cart/CartContainer"
import ItemDetailContainer  from "./components/pages/itemDetail/ItemDetailContainer"
import NotFound from "./components/common/NotFound"
import { CartContextProvider } from "./components/context/CartContext"
import FormContainer from "./components/pages/form/FormContainer"
import Footer from "./components/layout/Footer"



const App = () => {
  return (
    <main>
      <BrowserRouter>
        <CartContextProvider>
            <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/Detail/:id" element={<ItemDetailContainer />} />
            <Route path="/form" element={<FormContainer/>} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </CartContextProvider>
      </BrowserRouter>
    </main>
  )
}

export default App