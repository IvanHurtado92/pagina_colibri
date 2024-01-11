import "../styles/Header.css";
import logo from "../Images/colibri_cabeza.png";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const abrirMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  return (
    <div>
      <header className="Encabezado h-12 text-2xl  2xl:h-24 2xl:text-4xl xl:h-20 xl:text-3xl lg:h-18 lg:text-2xl md:h-14 md:text-3xl overflow-hidden">
        <button className="mx-4 my-1 w-24">
          {/* Boton de inicio, regresará hasta arriba */}
          <img src={logo} className="Logo" alt="Logo del Salón Colibrí"></img>
        </button>
        <button className="Rm Titulo">Fotos</button>
        <button className="Rm Titulo">Información y Costos</button>
        <button className="Rm Titulo">Contactos</button>
        <button className="Rm Titulo">Visítanos</button>

        

        <button
          name="Hamburguesa"
          id="menu"
          className="Titulo absolute inset-y-0 right-0 text-4xl"
          style={{ height: "50%" }}
          onClick={abrirMenu}
        >
          <ion-icon name="menu"></ion-icon>
        </button>
      </header>

      {/* Conditional rendering for the menu */}
      {isMenuOpen && (
        <div className="z-10 absolute right-2 top-14 border border-solid border-black bg-emerald-200 min-h-fit w-4/12 text-sm rounded-lg overflow-hidden">
          <div className="block text-center">
            <button className="Hamb text-center m-1">Fotos</button>
            <br />
            <button className="Hamb text-center m-1">Información y Costos</button>
            <br />
            <button className="Hamb text-center m-1">Contactos</button>
            <br />
            <button className="Hamb text-center m-1">Visítanos</button>
          </div>
        </div>
      )}
    </div>
    
  );
};

export default Header;
