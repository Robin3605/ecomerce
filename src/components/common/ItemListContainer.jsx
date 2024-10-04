import CartWidget from "./CartWidget "


const ItemListContainer = () => {
  return (
    <section className="flex items-center justify-between px-4 py-2">
      <ul className="flex items-center gap-4 list-none px-4">
        <li>Title</li>
        <li>Price</li>
        <li>Stock</li>
      </ul>
      <CartWidget />
    </section>
  )
}

export default ItemListContainer