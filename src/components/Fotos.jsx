import "../styles/Fotos.css"

const Fotos = ({className}) => {
    const clases = "p-20 text-center h-screen fondoF overflow-hidden " + className; //recuerda poner el espacio al final del string de las clases para que se respete las clases de la variable className
    return (
        <div className={clases}>
            <b className="text-slate-50 text-3xl brighter md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 2xl:text-emerald-400 xl:text-blue-500 lg:text-red-700 md:text-yellow-400">
        Fotos
      </b>
        </div>
    );
};

export default Fotos;