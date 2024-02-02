import React from "react";
import "../styles/HambComp.css"


const HambComp = ({nombre, funcion}) => {
    return(
        <button className="Hamb text-center px-1 py-1 w-full hover:bg-white active:bg-gray-300" onClick={(event) => {
            event.stopPropagation();
            console.log({nombre})}}>
            {nombre}
        </button>
    )
}

export default HambComp