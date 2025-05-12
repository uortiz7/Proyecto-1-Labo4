import { useState } from "react";
import { useLista } from "../lista";
import ElementoLista from "./elemento-lista";

export default function Listado() {
  const { lista } = useLista();
  const [busqueda, setBusqueda] = useState("");
  console.log(busqueda);

  const listaFiltrada = lista.filter((video) =>
    video.nombre?.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <section
      id="listado"
      className="
        h-full px-5
        flex flex-col justify-center gap-2
        bg-black/50
      "
    >
      <h2 className="text-lg">Listado de Videos</h2>
      {lista.length > 1 && (
        <input
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar Canción..."
        />
      )}
      {listaFiltrada.length > 0 && (
        <ul className="overflow-y-auto border border-cyan-400 p-2 rounded">
          {listaFiltrada.map((video) => {
            return <ElementoLista video={video} />;
          })}
        </ul>
      )}
      {lista.length < 1 && (
        <p className="text-xs text-cyan-200">No hay videos agregados aún</p>
      )}
    </section>
  );
}
