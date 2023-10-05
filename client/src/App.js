import{Routes, Route} from "react-router-dom";
import Principal from "./components/Principal";
import CrearCuenta from "./components/CrearCuenta";
import IniciarSesion from "./components/IniciarSesion";
import CrearSitio from "./components/CrearSitio";
import VistaSitio from "./components/VistaSitio";
import Admin from "./components/Admin";
import ActualizarSitio from "./components/ActualizarSitio";
import HacerPedido from "./components/HacerPedido";
import ActualizarPedido from "./components/EditarPedido";


const App = () =>{
  return(
    <div className="container">
      <Routes>
        <Route path="/" exact element={<Principal/>} />
        <Route path="/admin" exact element={<Admin/>} />
        <Route path="/crearcuenta" element={<CrearCuenta/>}/>
        <Route path="/iniciar-sesion" element={<IniciarSesion/>}/>
        <Route path="/crearsitio" element={<CrearSitio/>}/>
        <Route path="/vistaprevia/:id" element={<VistaSitio/>}/>
        <Route path="/hacerpedido" element={<HacerPedido/>}/>
        <Route path="/editarsitio/:id" element={<ActualizarSitio/>}/>
        <Route path="/editarpedido/:id" element={<ActualizarPedido/>}/>
      </Routes>
    </div>
  )
}

export default App;