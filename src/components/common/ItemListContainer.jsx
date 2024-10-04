import CartWidget from "./CartWidget "


const ItemListContainer = () => {
  return (
    <section className="flex items-center justify-between px-4 py-2">
      <ul className="flex items-center gap-4 list-none px-4">
        <li className="hover:text-slate-500 "><a href="#">Title</a></li>
        <li className="hover:text-slate-500 "><a href="#">Price</a></li>
        <li className="hover:text-slate-500 "><a href="#">Stock</a></li>
      </ul>
      <CartWidget />
    </section>
  )
}

export default ItemListContainer