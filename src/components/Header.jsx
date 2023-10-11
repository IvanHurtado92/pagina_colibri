import "../styles/Header.css";
import logo from "../Images/colibri_cabeza.png";

const Header = () => {
  return (
    <header className="Encabezado ">
      <button className="mx-3 my-1 w-24">
        {/* Boton de inicio, regresará hasta arriba */}
        <img src={logo} className="Logo" alt="Logo del Salón Colibrí"></img>
      </button>
      <button className="Titulo">Fotos</button>
      <button className="Titulo">Información</button>
      <button className="Titulo">Costos</button>
      <button className="Titulo">Contactos</button>
      <button className="Titulo">Visítanos</button>
    </header>
  );
};

export default Header;
