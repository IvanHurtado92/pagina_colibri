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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
        <div className="lista">
          <b>Costo</b>
          <br />
          <ul>
            <li>Fines de semana: $2500</li>
            <li>Entre semana: $2300</li>
          </ul>
          <br />
          <b>Incluye</b>
          <ul className="info">
            <br />
            <li>7 mesas para 10 personas</li>
            <li>2 mesas y sillas para niños</li>
            <li>1 mesa para pastel y regalos</li>
            <li>Futbolito, esfera giratoria</li>
            <li>Puente colgante, resbaladilla y tubo de bomberos</li>
            <li>
            <li>Cocina con estufa, refrigerador y hielera</li>
              <i>Inflable con costo adicional de $400</i>
            </li>
            <br />
          </ul>
        </div>
        
        <div>
          <img
            src={img1}
            alt="Imagen de vista exterior del salón"
            className="border-2 border-solid border-black rounded-md "
          />
          <br />
          {/* <br />
          <button onClick={accion} className="btn bg-emerald-600 border border-solid border-black rounded">{text}</button> */}
        </div>

        <div className="lista">
          <ul>
            <li>
              <b>Horarios de fiestas</b>
            </li>
            <br />
            <li>Toda la semana: 2pm a 9pm</li>
            <br />
            <li>
              <b>Horarios de atención</b>
            </li>
            <br />
            <li>Lunes a Viernes: 2pm a 6pm</li>
            <br />
            <li>
              <b>Ubicación</b>
            </li>
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
