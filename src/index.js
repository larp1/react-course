import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Button  from "./Button";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Button text="volver" />
    <Button text="Seguir" />
    <Greeting title="Componente 1" name="Luis" lastname="Rodriguez Perez" />
    <Greeting title="Componente 2" name="Benja" lastname="Rodriguez Vilches" />
    <Greeting title="Componente 3" name="Isa" lastname="Rodriguez Vilches" />
    <UserCard
      name="Andrea Vilches"
      amount={3000}
      married={true}
      points={[3, 5, 7]}
      address={{ street: "cuarto centenario 936", city: "La Serena" }}
    />
  </>
);
