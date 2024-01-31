import "../styles/Visitanos.css";

export default function Visitanos({ className, titulos }) {
  const clases = "fondoV " + className;
  return (
    <div className={clases}>
      <b className={titulos}>Visítanos</b>
      <div className="h-20"></div>
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d778.4821657631591!2d-102.30250492300736!3d21.853441972180295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ec3372c5e49d%3A0x24206c7153cc7620!2sSalon%20De%20Fiestas%20Infantiles%20Colibri%20Boulevares!5e0!3m2!1ses-419!2smx!4v1698347688193!5m2!1ses-419!2smx"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="outline outline-4 outline-black outline-offset-0"
          title="ubi"
        ></iframe>
      </div>
    </div>
  );
}
