import logo from "../Images/logoSalon.png";
import "../styles/Logo.css";

const Logo = () => {
  return (
    <div className="m-20 text-center">
      <div className="justify-center flex">
        <img
          src={logo}
          className="colibri h-auto w-5/6 2xl:w-5/12 xl:w-5/12 lg:w-6/12 md:w-7/12"
          alt="Logo del Salón Colibrí"
        ></img>
      </div>

      <b className="text-slate-50 text-3xl brighter md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 2xl:text-emerald-400 xl:text-blue-500 lg:text-red-700 md:text-yellow-400">
        Salón de Fiestas Infantiles Colibrí
      </b>
    </div>
  );
};

export default Logo;
