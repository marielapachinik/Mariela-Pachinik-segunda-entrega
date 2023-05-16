
import "boxicons";
import { BrowserRouter,Router,Routes } from "react-router-dom";
import React from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer";





const Tienda= () =>{

    return(
        <div>
            <h1>Libros</h1>
            <ItemListContainer/>
           


        </div>
        
    )

}

export default Tienda


