import ProductCard from "../components/ProductCard"
export default function Products(){
     const productos = [
    { id: 1, name: "Camiseta", price: 39.99, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Sudadera", price: 69.99, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Gorra", price: 19.99, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Pantalón", price: 59.99, image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="container mt-4">
      <h2>Todos los Productos 👕</h2>
      <div className="d-flex flex-wrap gap-3 mt-3">
        {productos.map(p => (
          <ProductCard key={p.id} producto={p} />
        ))}
      </div>
    </div>
  );
}