import { useLista } from "./lista";
import { useState } from "react";

export default function Agregar() {
  const { lista, setLista } = useLista();
  const [nombre, setNombre] = useState("");
  const [link, setLink] = useState("");

  const agregarLista = (e) => {
    e.preventDefault();
    const id = validarDatos();
    if (id) {
      const nuevoVideo = {
        id,
        nombre,
        contador: 0,
        favorito: false,
      };
      setLista([...lista, nuevoVideo]);
      setNombre("");
      setLink("");
    }
  };

  const validarDatos = () => {
    if (nombre.trim() !== "" && link.trim() !== "") {
      try {
        const url = new URL(link);

        if (url.hostname.includes("youtube")) {
          const id = url.searchParams.get("v");

          if (id) {
            return id;
          } else {
            alert("El link debe contener un video válido");
          }
        } else {
          alert("El link debe ser de YouTube");
        }
      } catch {
        alert("Link no válido");
      }
    } else {
      alert("Completa todos los campos");
    }

    return false;
  };

  return (
    <header
      id="agregar"
      className="
        flex flex-col
        p-5
        bg-black/20
      "
    >
      <h2 className="-mt-2 mb-1 text-lg font-bold">Agregar a la Lista</h2>
      <form
        action="sumbit"
        className="flex gap-5 items-end"
        onSubmit={agregarLista}
      >
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>

        <label>
          Link del Video:
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </label>

        <button type="sumbit">Agregar</button>
      </form>
    </header>
  );
}
