import "../styles/Info.css";
import img1 from "../Images/4.jpg";
// import { useState } from "react";

// let textorig = 'click'

const Info = ({ className, titulos }) => {

  // const [text,setText] = useState(textorig);

  // function accion(){
  //   setText('Gracias :)')
  //   console.log('titulo cambiado')
  // }

  const clases = "fondo " + className;
  return (
    <div className={clases}>
      <b className={titulos}>Información y Costos</b>
      <div className="h-20"></div>
      <div className="grid grid-cols-3 ">
        <div className="lista">
          <ul>
            <li><b>Costo</b></li>
            <br />
            <li>Fines de semana: $2500</li>
            <li>Entre semana: $2300</li>
            <br />
            <li><b>Incluye</b></li>
            <br />
            <li>8 mesas para 10 personas</li>
            <li>2 mesas y sillas para niños</li>
            <li>1 mesa para pastel y regalos</li>
            <li>Futbolito, esfera giratoria</li>
            <li>Puente colgante, resbaladilla y tubo de bomberos</li>
            <li><i>Inflable con costo adicional de $400</i></li>
            <li>Cocina con estufa, refrigerador y hielera</li>
          </ul>
        </div>
        <div>Imagen de vista exterior del salón
          <img src={img1} alt="Imagen de vista exterior del salón" className="border-2 border-solid border-black rounded-md " />
          {/* <br />
          <button onClick={accion} className="btn bg-emerald-600 border border-solid border-black rounded">{text}</button> */}
        </div>
        
        <div className="lista">
          <ul>
            <li><b>Horarios de fiestas</b></li>
            <br />
            <li>Toda la semana: 2pm a 9pm</li>
            <br />
            <li><b>Horarios de atención</b></li>
            <br />
            <li>Lunes a Viernes: 2pm a 6pm</li>
            <br />
            <li><b>Ubicación</b></li>
            <br />
            <li>Av. Prof. Enrique Olivares Santana #505</li>
            <li>Boulevares 1ra sección</li>
            <li>Aguascalientes, Ags.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;
