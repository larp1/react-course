import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Button from "./Button";
import { TaskCard } from "./Task";
import { Posts } from "./Posts";
import { Counter } from "./Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));

const array_users = [
  {
    id: 1,
    name: "Luis Rodriguez",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Guillermo Marchant",
    image: "https://robohash.org/user2",
  },
];

root.render(
  <>
    {/* <Button text="volver" />
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
    /> */}
    <TaskCard ready={false}></TaskCard>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("enviado");
      }}
    >
      <h1>Formulario de prueba</h1>
      <button>Send</button>
    </form>

    <Posts></Posts>

    {array_users.map((user, index) => {
      return( 
        <div key={index}>
          <h1>{user.name}</h1>
          <img src={user.image} />
        </div>
        
      );
    })}

    <Counter />
  </>
);
