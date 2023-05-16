
import "boxicons";
import { BrowserRouter,Router,Routes } from "react-router-dom";
import React from "react";
import libros from "../../imagenes/libros.png"


function Home() {

    return (
        
        <div>
            <fragment  className="Portada">
                <img src={libros} alt="portada" width="1000" />
            </fragment>
            
        </div>
    );

}

export default Home