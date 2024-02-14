import "../styles/Fotos.css";

const Fotos = ({ className, titulos }) => {
  // const clases = "fondoF " + className; //recuerda poner el espacio al final del string de las clases para que se respete las clases de la variable className
  return (
    <div className={`fondoF ${className}`}>
      <b className={titulos}>Fotos</b>
    </div>
  );
};

export default Fotos;
