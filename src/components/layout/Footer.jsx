

const Footer = () => {
  return (
    <div></div>
  )
}

export default Footer












// import  { useState, useEffect } from 'react';
// import { products } from "../../products";

// const Footer = () => {
//   const [indiceActual, setIndiceActual] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndiceActual(prev => (prev + 1) % products.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <footer className='py-4 mx-4 justify-center items-center  overflow-hidden'>
//         <div 
//           className="flex transition-transform duration-1000 ease-in-out w-[500px] h-[300px]  mx-4 items-center rounded-lg"
//             style={{ transform: `translateX(-${indiceActual * 100}%)` }} // Desplazamiento
//         >
//           {products.map((producto, index) => (
//             <div 
//               key={index} 
//               className="flex-shrink-0 w-full h-full flex flex-col justify-center items-center bg-orange-800 p-4 opacity-0 transition-opacity duration-1000 delay-[0.5s * ${index}]"
//               style={{ opacity: indiceActual === index ? 1 : 0 }} // Controla la opacidad
//             >
//               <img 
//                 src={producto.image} 
//                 alt={producto.description} 
//                 className="w-[250px] h-[250px] object-contain mb-2"
//               />
//               <h2 className="text-white mb-1">{producto.title}</h2>
//             </div>
//           ))}
//         </div>
//     </footer>
//   )
// }

// export default Footer

// import React, { useState, useEffect } from 'react';

// const Carousel = ({ productos }) => {
//     const [indiceActual, setIndiceActual] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setIndiceActual(prev => (prev + 1) % productos.length); // Cambia al siguiente producto
//         }, 3000); // Cambia cada 3 segundos

//         return () => clearInterval(interval); // Limpiar el intervalo al desmontar
//     }, [productos.length]);

//     return (
//         <div className="overflow-hidden w-full h-[300px] relative">
//             <div 
//                 className="flex transition-transform duration-500"
//                 style={{ transform: `translateX(-${indiceActual * 100}%)` }} // Desplazamiento
//             >
//                 {productos.map((producto, index) => (
//                     <div key={index} className="flex-shrink-0 w-full h-full flex flex-col justify-center items-center bg-orange-600 p-4">
//                         <img 
//                             src={producto.image} 
//                             alt={producto.description} 
//                             className="w-[200px] h-[150px] object-contain mb-2"
//                         />
//                         <h2 className="text-white mb-1">{producto.title}</h2>
//                         <p className="text-white font-bold">Descuento: {producto.discount}%</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Carousel;
