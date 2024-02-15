import "../styles/Visitanos.css";

export default function Visitanos({ className, titulos }) {
  return (
    <div className={`fondoV ${className}`}>
      {/* agregamos la clase personalizada mas el className usando template strings para ahorrar líneas */}
      <b className={titulos}>Visítanos</b>
      <div className="h-20"></div>
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d778.4821657631591!2d-102.30250492300736!3d21.853441972180295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ec3372c5e49d%3A0x24206c7153cc7620!2sSalon%20De%20Fiestas%20Infantiles%20Colibri%20Boulevares!5e0!3m2!1ses-419!2smx!4v1698347688193!5m2!1ses-419!2smx"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="outline outline-4 outline-black outline-offset-0"
          title="ubi"
        ></iframe>
      </div>
      <br />
      <div className="flex justify-center">
        <a className="underline text-white hover:text-blue-800 visited:text-purple-600" href="https://www.google.com/maps/dir//Prof.+Enrique+Olivares+Santana+505,+Bulevares+1ra+Secc,+20288+Aguascalientes,+Ags./@21.853446,-102.3852353,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8429ec3372c5e49d:0x24206c7153cc7620!2m2!1d-102.3028339!2d21.8534661?entry=ttu" target="blank">
          <b>Link de la dirección</b>
        </a>
      </div>
      <br />
      <b className="text-white">Dirección</b>
      <br />
      <p>Av. Prof. Enrique Olivares Santana #505</p>
      <p>Boulevares 1ra sección</p>
      <p>Aguascalientes, Ags.</p>
    </div>
  );
}
