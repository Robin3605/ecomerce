import { useState, useEffect } from "react";
import { products } from "../../products";

const Banner = () => {
  const productosConDescuento = products.filter(
    (product) => product.discount > 0
  );

  
  const [imagenActual, setImagenActual] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImagenActual((prev) => (prev + 1) % productosConDescuento.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, [productosConDescuento.length]);

  if (productosConDescuento.length === 0) return null; // No mostrar el banner si no hay productos

  const productoActual = productosConDescuento[imagenActual];

  return (
    <section className="flex justify-center items-center text-center py-10 mx-6">
      <div className="bg-orange-800 flex justify-center items-center rounded-lg w-[700px] h-[400px] shadow-lg flex-1">
        <h2 className="text-4xl font-bold text-white mb-4 mx-4">
          <span className="text-6xl text-[#070b3c]">S</span>uper{" "}
          <span className="text-6xl text-[#070b3c]">S</span>ale
        </h2>
        <div className="flex items-center ">
          <img
            src={productoActual.image}
            alt={productoActual.description}
            className="w-[320px] h-[320px] object-contain mb-4 mx-4 rounded-lg"
          />
          <h2 className="text-white mb-2 mx-4 text-3xl">
            {productoActual.title}
          </h2>
          <p className="text-white font-bold mx-4 text-2xl">
            Discount: {productoActual.discount}%
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;


