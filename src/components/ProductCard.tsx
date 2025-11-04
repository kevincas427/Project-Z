interface Productos {
    id:number;
    name:string;
    price:number;
    image:string;
}

interface Props{
    producto:Productos
}

export default function ProductCard({producto}: Props){
    return(
    <div className="card" style={{ width: "18rem" }}>
      <img src={producto.image} className="card-img-top" alt={producto.name} />
      <div className="card-body">
        <h5 className="card-title">{producto.name}</h5>
        <p className="card-text">${producto.price.toFixed(2)}</p>
        <button className="btn btn-primary">Agregar al carrito</button>
      </div>
    </div>
    )
}