import React from 'react';
import 'boxicons';
import { BrowserRouter,Router,Routes } from "react-router-dom";
import { Link} from 'react-router-dom';


const Footer = () => {
    return(
        <div>
           
            <footer className='footer'>
            <h5 className="titulo-footer">Siguenos en</h5>
                <div className="Container-footer">
                   
                    <nav className="icons">
                        
                        <ul className="iconos">
                            <li>
                                
                            </li>
                            <li>
                            <Link to="https://www.instagram.com/marielapachinik/" target="_blank">
                                <box-icon type='logo' name='instagram'></box-icon>
                            </Link>
                            </li>
                            <li>
                            <Link to="https://www.linkedin.com/in/mariela-pachinik-041063124/" target="_blank">
                                <box-icon type='logo' name='linkedin-square'></box-icon>
                            </Link>
                            </li>
                        </ul> 
                    </nav>
                </div>
            </footer>
        </div>
    )
}

export default Footer