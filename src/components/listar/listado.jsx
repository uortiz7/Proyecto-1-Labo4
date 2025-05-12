import { useState } from "react";
import { useLista } from "../lista";
import ElementoLista from "./elemento-lista";

export default function Listado() {
  const { lista } = useLista();
  const [busqueda, setBusqueda] = useState("");
  console.log(busqueda);

  return (
    <section
      id="listado"
      className="
        px-5
        flex flex-col justify-center gap-2
        bg-black/50
      "
    >
      <h2 className="text-lg">Listado de Videos</h2>
      {lista.length > 1 && (
        <input
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.value)}
          placeholder="Buscar Canción..."
        />
      )}
      {lista.length > 0 && (
        <ul className="overflow-y-auto border border-blue-300 p-2 rounded">
          {lista.map((video) => {
            return <ElementoLista video={video} />;
          })}
        </ul>
      )}
    </section>
  );
}
