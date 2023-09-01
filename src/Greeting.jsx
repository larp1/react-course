export function Greeting({ title, name, lastname }) {
  function add(x, y) {
    return x + y;
  }

  const married = false;
  // const user = {
  //   firstname: "Joe",
  //   lastname: "Rodriguez",
  // };

  return (
    <>
      <h1>{married ? "Estoy casado" : "No estoy casado"}</h1>
      <h2>{name + " " + lastname}</h2>
      <h3>{add(10, 20)}</h3>
      <h4>{title}</h4>
    </>
  );
}

export function UserCard({ name, amount, married, points, address }) {
  function imprimirPuntos(puntos) {
    return (
      <div>
        {puntos.map((elemento, index) => (
          <div key={index}>
            {/* Genera la estructura JSX para cada elemento */}
            <p>Puntos {index+1}: {elemento}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <h4>{name}</h4>
      <p>${amount}</p>
      <p>{married ? "casado/a" : "soltero/a"}</p>
      <ul>
        <li>Calle: {address.street}</li>
        <li>City: {address.city}</li>
      </ul>
      {imprimirPuntos(points)}
    </>
  );
}
