import "./App.css";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Fotos from "./components/Fotos";
import Info from "./components/Info";

const disenios = "min-h-400 md:min-h-400 lg:min-h-450 xl:500 2xl:600"; //corregir!!!!

function App() {
  return (
    <div>
      <Header />
      <Inicio className={disenios} />
      <Fotos className={disenios} />
      <Info className={disenios} />
    </div>
  );
}

export default App;
