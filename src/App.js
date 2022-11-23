import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import Input from "./components/input";
import Boton from "./components/boton";

function App() {
  const [nombre, setNombre] = useState(null);
  const [password, setPassword] = useState("");

  const usuario = (e) => {
    setNombre(e.target.value);
    console.log(nombre);
  };

  const contraseña = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  return (
    <div className="d-flex flex-column container-md ">
      <h1 className="m-3 text-light bg-dark text-center p-3 rounded">
        Desafio estado de los componentes y eventos
      </h1>
      {nombre ? (
        <h2>
          Bienvenido <span className="text-light bg-success p-2 rounded">{nombre}</span>
        </h2>
      ) : (
        <h2 className="bg-warning rounded">Aun no te has logueado</h2>
      )}
      <Input nombre={usuario} password={contraseña} />
      {password == "252525" ? (
        <Boton />
      ) : password == "" ? (
        <p></p>
      ) : (
        <h2 className="bg-danger text-light rounded">Contraseña incorrecta</h2>
      )}
    </div>
  );
}

export default App;
