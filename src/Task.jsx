import "./task.css";

export function TaskCard({ready}) {
  //const cardStyles = { background: "#000", color: "#fff", padding: "20px" };
  //const headdStyles = { fontWeight: "lighter" };
  return (
    <div className="card">
      <h1 className="header">Mi primer tarea</h1>
      <span className={ready ? 'bg-green' : 'bg-red'}>{ready ? "Tarea realizada" : "Tarea pendiente"}</span>
    </div>
  );
}
