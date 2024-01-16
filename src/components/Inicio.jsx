import logo from "../Images/logoSalon.png";
import "../styles/Inicio.css";

const Inicio = ({ className, titulos }) => {
  const clases = "" + className;
  return (
    <div className={clases}>
      <div className="justify-center flex">
        <img
          src={logo}
          className="colibri h-auto w-5/6 2xl:w-5/12 xl:w-5/12 lg:w-6/12 md:w-7/12"
          alt="Logo del Salón Colibrí"
        ></img>
      </div>

      <b className={titulos}>Salón de Fiestas Infantiles Colibrí</b>
      <br />
      <h1 style={{color:"white",fontSize:"1.2rem"}}><i>Dándote un espacio de felicidad desde 2005</i></h1>
    </div>
  );
};

export default Inicio;
