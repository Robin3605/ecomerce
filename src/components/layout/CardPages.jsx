import Card from "../common/Card"


const CardPages = () => {
  return (
    <section className="flex flex-wrap gap-4 items-center justify-center">
      <Card title="Zapatos" description="description" price={2000} stock={10} image='https://i.pinimg.com/474x/95/4c/38/954c38b938634e4f7ab40525f189fc76.jpg'/>
      <Card title="Celulares" description="description" price={6000} stock={20} image='https://i.pinimg.com/474x/28/52/c5/2852c54c7bc9df25762644080556bcd5.jpg'/>
      <Card title="Computadoras" description="description" price={7000} stock={30} image='https://i.pinimg.com/474x/b1/d9/e1/b1d9e1a596154850c8e1379814efb06d.jpg'/>
      <Card title="Tabletas" description="description" price={3000} stock={40} image='https://i.pinimg.com/474x/60/7b/b8/607bb825ee1f51f11d848d0e21161371.jpg'/>
      <Card title="Accesorios" description="description" price={1000} stock={50} image='https://i.pinimg.com/474x/a0/fa/4b/a0fa4bee5a76c67414ef899ca0482e2c.jpg'/>
      <Card title="Relojes" description="description" price={4000} stock={60} image='https://i.pinimg.com/474x/3a/23/aa/3a23aa9779df12454f7dfd67a8a9fcae.jpg'/>
      <Card title="Camaras" description="description" price={9000} stock={70} image='https://i.pinimg.com/474x/bb/53/36/bb53369dded322e74ec3db8b2146444a.jpg'/>
      <Card title="Consolas" description="description" price={5000} stock={80} image='https://i.pinimg.com/474x/d2/06/6a/d2066a3870302acb553e68d5c2380846.jpg'/>
      <Card title="Otros" description="description" price={8000} stock={90} image='https://i.pinimg.com/474x/96/0f/76/960f761630e5a772c01a172c24553dd8.jpg'/>
    </section>
  )
}

export default CardPages