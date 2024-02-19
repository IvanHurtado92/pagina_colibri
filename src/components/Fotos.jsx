import "../styles/Fotos.css";
import FotoSlider from "./FotoSlider"

const fotos = [
  {url:"https://i.ibb.co/cTdZnkc/5.jpg", titulo:"Lugar principal"},
  {url:"https://i.ibb.co/SvYmk6H/8.jpg", titulo:"Cocina"},
  {url:"https://i.ibb.co/N6nbRmj/4.jpg", titulo:"Zona de juegos"},
  {url:"https://i.ibb.co/R7dXwsF/2.jpg", titulo:"Lugar principal"},
]


const Fotos = ({ className, titulos }) => {
  // const clases = "fondoF " + className; //recuerda poner el espacio al final del string de las clases para que se respete las clases de la variable className
  return (
    <div className={`fondoF ${className}`}>
      <b className={titulos}>Fotos</b>
      <div className="h-10"></div>
      <FotoSlider className="h-full w-full" slides={fotos}/>
    </div>
  );
};

export default Fotos;
