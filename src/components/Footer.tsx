export default function Footer(){
    return(
    <footer className="bg-dark text-light text-center py-3 mt-4">
      <div className="Footer-Contenedor">
        <div className="Lista-Seccion">
          <h3 className="Footer-titulo">Nosotros</h3>
          <ul>
            <li>Sobre Nostros</li>
            <li>Nuestrtos Servicios</li>
            <li>Politicas De Privacidad</li>
          </ul>
        </div>
        <div className="Lista-Seccion">
          <h3 className="Footer-titulo">Tienda Online</h3>
          <ul>
            <li>Productos</li>
            <li>Carrito</li>
            <li>Tiendas</li>
            <li>Ubicacion</li>
          </ul>
        </div>
        <div className="Lista-Seccion">
          <h3 className="Footer-titulo">Siguenos</h3>
          <ul>
            <li>Icono de Tiktok</li>
            <li>Icono de intagram</li>
            <li>Icono de Whatsapp</li>
          </ul>
        </div>
        <p>© {new Date().getFullYear()} Mi eCommerce. Todos los derechos reservados.</p>
      </div>
    </footer>
    );
}


