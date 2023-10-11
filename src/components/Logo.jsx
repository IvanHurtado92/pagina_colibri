import logo from "../Images/logoSalon.png";
import "../styles/Logo.css";

const Logo = () => {
  return (
    <div className="m-20">
      <div className="justify-center flex">
        <img src={logo} className="colibri" alt="Logo del Salón Colibrí"></img>
      </div>

      <b className="justify-center flex text-6xl brighter">
        Salón de Fiestas Infantiles Colibrí
      </b>
    </div>
  );
};

export default Logo;
