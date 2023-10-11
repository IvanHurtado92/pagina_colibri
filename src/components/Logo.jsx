import logo from "../Images/logoSalon.png";
import "../styles/Logo.css";

const Logo = () => {
  return (
    <div className="m-20">
      <div className="justify-center flex">
        <img src={logo} className="colibri" alt="Logo del Salón Colibrí"></img>
      </div>

      <b className="text-slate-50 justify-center flex text-8xl brighter md:text-8xl lg:text-8xl xl:text-7xl 2xl:text-7xl 2xl:text-emerald-400 xl:text-blue-500 lg:text-red-700">
        Salón de Fiestas Infantiles Colibrí
      </b>
    </div>
  );
};

export default Logo;
