import "../styles/Header.css";
import logo from "../Images/colibri_cabeza.png";
import HambMenu from "./HambMenu";
import { useState } from "react";

const componentes = [
  { nombre: "Fotos", funcion: null },
  { nombre: "Información y Costos", funcion: null },
  { nombre: "Visítanos", funcion: null },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //cada que se usa el método set, el componente se recarga con la variable cambiada y todos los cambios al componente que involucre

  const abrirMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const cerrarMenu = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <>
      <div className="sticky top-0 z-20">
        <header className="Encabezado h-12 text-2xl 2xl:h-24 2xl:text-4xl xl:h-20 xl:text-3xl lg:h-18 lg:text-2xl md:h-14 md:text-3xl">
          <button className="mx-4 my-1 w-24">
            {/* Boton de inicio, regresará hasta arriba */}
            <img
              id="TopLogo"
              src={logo}
              className="Logo"
              alt="Logo del Salón Colibrí"
            ></img>
          </button>

          {componentes.map((comp, index) => {
            return (
              <button className="Rm Titulo" key={index}>
                {comp.nombre}
              </button>
            );
          })}

          <button
            name="Hamburguesa"
            id="menu"
            className="Titulo absolute inset-y-0 right-0 text-4xl"
            style={{ height: "50%", color: "white" }}
            onClick={abrirMenu}
          >
            <ion-icon name={isMenuOpen ? "close" : "menu"}></ion-icon>
          </button>
        </header>

        <HambMenu componentes={componentes} isMenuOpen={isMenuOpen} />
      </div>
      <div
        className="fixed top-0 left-0 w-full h-full"
        onClick={cerrarMenu}
      ></div>
    </>
  );
};

export default Header;
