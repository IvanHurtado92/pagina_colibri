import "../styles/Header.css";
import logo from "../Images/colibri_cabeza.png";
import HambComp from "./HambComp";
import { useState } from "react";
import OutsideClickHandler from 'react-outside-click-handler';

const componentes = [
  { nombre: "Fotos", funcion: null },
  { nombre: "Información y Costos", funcion: null },
  { nombre: "Contactos", funcion: null },
  { nombre: "Visitanos", funcion: null },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hambClickeado, setHambClickeado] = useState(false);

  const abrirMenu = () => {
    setIsMenuOpen(!isMenuOpen); //cada que se usa el método set, el componente se recarga con la variable cambiada y todos los cambios al componente que involucre
    setHambClickeado(!hambClickeado);
    console.log("IsMenu ---> Menu abierto: " + !isMenuOpen + ", Hamburguesa Clickeada: " + !hambClickeado);
  };

  const cerrarMenu = () => {
    setHambClickeado(false);
    console.log("CerraMenu ---> Menu abierto: " + isMenuOpen + ", Hamburguesa Clickeada: " + hambClickeado);
  }


  // if (window.innerWidth >1060) setIsMenuOpen(false) // hay un error aqui, no se si sea por llamar dos veces la funcion setIsMenuOpen

  return (
    <div className="sticky top-0 z-20">
      <header className="Encabezado h-12 text-2xl 2xl:h-24 2xl:text-4xl xl:h-20 xl:text-3xl lg:h-18 lg:text-2xl md:h-14 md:text-3xl">
        <button className="mx-4 my-1 w-24">
          {/* Boton de inicio, regresará hasta arriba */}
          <img id="TopLogo" src={logo} className="Logo" alt="Logo del Salón Colibrí"></img>
        </button>

        {componentes.map((comp) => {
          return <button className="Rm Titulo">{comp.nombre}</button>;
        })}

        <button
          name="Hamburguesa"
          id="menu"
          className="Titulo absolute inset-y-0 right-0 text-4xl"
          style={{ height: "50%", color:"white" }}
          onClick={abrirMenu}
        >
          <ion-icon name="menu"></ion-icon>
        </button>

      </header>

      <OutsideClickHandler onOutsideClick={cerrarMenu}>
        <div
          id="DivHamb"
          className="z-10 absolute right-0 md:top-14 sm:top-12 border-black min-h-fit min-w-fit text-lg 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-lg overflow-hidden"
          style={{"opacity": (isMenuOpen && hambClickeado) ? 1 : 0}}
        >
          {/* Acomodar el menu usando anchor en cuanto ya sea funcional en los navegadores */}
          <div className="block text-center">
            {componentes.map((comp) => {
              return (
                <div>
                  <HambComp nombre={comp.nombre} />
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Header;


{/* Conditional rendering for the menu  "short-circuit evaluation."*/}
// {isMenuOpen && (
//   <div
//     id="DivHamb"
//     className="z-10 absolute right-2 md:top-14 sm:top-12 border border-solid border-black bg-emerald-200 min-h-fit min-w-fit text-2xl 2xl:text-4xlxl:text-3xl lg:text-2xl md:text-3xl rounded-lg overflow-hidden"
//   >
//     {/* Acomodar el menu usando anchor en cuanto ya sea funcional en los navegadores */}
//     <div className="block text-center">
//       {componentes.map((comp) => {
//         return (
//           <div>
//             <HambComp nombre={comp.nombre} />
//             <br />
//           </div>
//         );
//       })}
//     </div>
//   </div>
// )}