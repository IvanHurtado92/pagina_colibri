import { useState } from "react";
import "../styles/FotoSlider.css";

const FotoSlider = ({ slides, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const irSiguiente = () => {
    const esUltimaImg = currentIndex === slides.length - 1;
    esUltimaImg ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
  };

  const irAtras = () => {
    const esPrimeraImg = currentIndex === 0;
    esPrimeraImg
      ? setCurrentIndex(slides.length - 1)
      : setCurrentIndex(currentIndex - 1);
  };

  const goToSlide = (indice) => {
    setCurrentIndex(indice);
  };

  return (
    <div className={className}>
      <div className="flex justify-center text-center relative 2xl:w-1/2 xl:w-1/2 lg:w-3/5 md:3/5 sm:w-4/5 w-11/12 h-auto">
        <button
          className="flechas absolute top-2/4 left-1 z-30"
          onClick={irAtras}
        >
          <ion-icon name="arrow-dropleft"></ion-icon>
        </button>
        <button
          className="flechas absolute top-2/4 right-1 z-30"
          onClick={irSiguiente}
        >
          <ion-icon name="arrow-dropright"></ion-icon>
        </button>
        <img
          src={slides[currentIndex].url}
          className=" border-solid border-black border-2 rounded-3xl"
          alt={slides[currentIndex].titulo}
        />
      </div>
      <div className="flex justify-center py-2">
        {slides.map((slide, index) => (
          <div
            className="px-5 text-4xl cursor-pointer z-20"
            key={index}
            onClick={() => goToSlide(index)}
          >
            ●
          </div>
        ))}
      </div>
      <br />
      <p>{slides[currentIndex].titulo}</p>
    </div>
  );
};

export default FotoSlider;
