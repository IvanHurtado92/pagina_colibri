import "../styles/Info.css";

const Info = ({ className, titulos }) => {
  const clases = "fondo " + className;
  return (
    <div className={clases}>
      <b className={titulos}>Información y Costos</b>
      <div className="h-20"></div>
      <div className="grid grid-cols-2 gap-52">
        <div className="borde">
          <ul>
            <li>mil quinientoddsss</li>
            <li>nalgas</li>
          </ul>
        </div>
        <div className="borde">
          <ul>
            <li>mil quinientoddsss</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;
