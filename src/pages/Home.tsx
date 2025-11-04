import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Imagen1 from '../assets/rolex.jpg'
import Imagen2 from '../assets/rolex_transicion.jpg'

export default function Home(){
    useEffect(()=>{
        const handleScroll = () => {
            if (window.scrollY > 0){
                document.body.classList.add("scrolled");
            }else{
                document.body.classList.remove("scrolled");
            }
        }
        window.addEventListener('scroll', handleScroll);
        return()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

  const productosDestacados = [
    { id: 1, name: "Camiseta SLAG", price: 39.99, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Pantalón Jogger", price: 59.99, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Gorra Urban", price: 19.99, image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="home-container">

      <article className="hero-article">
          <img className="Imagen1" src={Imagen1} alt="Hero" loading="eager" />
          <img className="Imagen2" src={Imagen2} alt="Transición" loading="lazy" />
          <div className="hero-desc" aria-hidden="false">
            <div className="desc-inner">
              <h2>Reloj Colección Vintage</h2>
              <p>Edición limitada con caja de acero, cristal de zafiro y correa de cuero. Diseño inspirado en modelos clásicos.</p>
              <p className="price">USD 4,250</p>
            </div>
          </div>
      </article>
      <section className="productos-section">
                <div className="container py-5">
                    <h2 className="text-center mb-4">Productos Destacados</h2>
                    <div className="row g-4">
                        {productosDestacados.map(p => (
                            <div key={p.id} className="col-12 col-md-4">
                                <div className="card h-100">
                                    <img src={p.image} className="card-img-top" alt={p.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{p.name}</h5>
                                        <p className="card-text">${p.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
      </section>
      <p>
        hola
      </p>
    </div>
  );
}