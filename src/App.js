
import './App.css';
import "boxicons";
import dragon from "./imagenes/dragon.png";
import libros from "./imagenes/libros.png"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Footer from './componentes/Footer/Footer';
import Home from './componentes/Pages/Home';
import Contacto from './componentes/Pages/Contacto';
import Tienda from './componentes/Pages/Tienda';
import Nosotros from './componentes/Pages/Nosotros';




function App() {
  return (
    <div className="App">
      <div className="logo">
          <img src={dragon} alt="logo" width="150"/>
          <h1 className="Nombre-tienda">Mundo Libros</h1>
      </div>
      <BrowserRouter>
        <Navbar/>
        <Routes> 
          <Route path='/' element={<Home/>}/>
          <Route path='/Contacto' element={<Contacto/>}/>
          <Route path='/Nosotros' element={<Nosotros/>}/>
          <Route path='/Tienda' element={<Tienda/>}/>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemDetailContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
     

    </div>
  );
}

export default App;
