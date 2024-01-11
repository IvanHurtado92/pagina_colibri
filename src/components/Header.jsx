import "../styles/Header.css";
import logo from "../Images/colibri_cabeza.png";

const Header = () => {
  return (
    <header className="Encabezado h-12 text-2xl  2xl:h-24 2xl:text-4xl xl:h-20 xl:text-3xl lg:h-18 lg:text-2xl md:h-14 md:text-3xl overflow-hidden">
      <button className="mx-4 my-1 w-24">
        {/* Boton de inicio, regresará hasta arriba */}
        <img src={logo} className="Logo" alt="Logo del Salón Colibrí"></img>
      </button>
      <button className="Rm Titulo">Fotos</button>
      <button className="Rm Titulo">Información y Costos</button>
      <button className="Rm Titulo">Contactos</button>
      <button className="Rm Titulo">Visítanos</button>
      <button id="menu" className="Titulo absolute inset-y-0 right-0 text-4xl" style={{height:"90%"}}><ion-icon name="menu"></ion-icon></button>
      
    </header>
  );
};

export default Header;
