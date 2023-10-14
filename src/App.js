import "./App.css";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Fotos from "./components/Fotos";
import Info from "./components/Info";

const disenioInicio =
  "px-20 pt-12 pb-20 text-center overflow-hidden min-h-screen  ";

const disenioSeccion =
  "p-20 pt-28 text-center h-screen overflow-hidden min-h-screen md:min-h-400 lg:min-h-450 xl:min-h-500 2xl:min-600 "; //corregir!!!!

const tituloClaro =
  "text-slate-50 text-3xl brighter md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 2xl:text-emerald-400 xl:text-blue-500 lg:text-red-700 md:text-yellow-400";

const tituloOscuro =
  "text-slate-950 text-3xl brighter md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 2xl:text-emerald-400 xl:text-blue-500 lg:text-red-700 md:text-yellow-400";

function App() {
  return (
    <div className="">
      <Header />
      <Inicio className={disenioInicio} titulos={tituloClaro} />
      <Fotos className={disenioSeccion} titulos={tituloClaro} />
      <Info className={disenioSeccion} titulos={tituloOscuro} />
    </div>
  );
}

export default App;
