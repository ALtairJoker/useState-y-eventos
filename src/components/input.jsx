export default function Input({ nombre, password }) {
  return (
    <form action="" className="d-flex flex-column justify-content-center ">
      <h3>Nombre</h3>
      <input type="text" placeholder="Ingrese su nombre" onChange={nombre} />
      <h3 className="mt-3">Contraseña</h3>
      <input
        type="password"
        placeholder="Ingrese su contraseña"
        className="mb-3"
        onChange={password}
      />
    </form>
  );
}
