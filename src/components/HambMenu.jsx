import "../styles/Header.css";
import HambComp from "./HambComp";

const HambMenu = ({ componentes, isMenuOpen }) => {
  return (
    <div
      id="DivHamb"
      className="z-10 absolute right-0 md:top-14 sm:top-12 border-black min-h-fit min-w-fit text-lg 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-lg overflow-hidden"
      style={{ opacity: isMenuOpen ? 1 : 0, zIndex: isMenuOpen ? 20 : -10 }}
    >
      <div className="block text-center">
        {componentes.map((comp, index) => {
          return (
            <div key={index}>
              <HambComp nombre={comp.nombre} />
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HambMenu;

{
  /* Conditional rendering for the menu  "short-circuit evaluation."*/
}
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
