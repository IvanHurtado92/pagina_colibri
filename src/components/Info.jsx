import "../styles/Info.css";

const Info = ({ className, titulos }) => {
  const clases = "fondo " + className;
  return (
    <div className={clases}>
      <b className={titulos}>Información y Costos</b>
    </div>
  );
};

export default Info;
