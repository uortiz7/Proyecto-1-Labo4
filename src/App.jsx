import { ListaProvider } from "./components/lista";
import Agregar from "./components/agregar";
import Listado from "./components/listar/listado";
import Favoritos from "./components/favoritos";

export default function App() {
  return (
    <ListaProvider>
      <Agregar />
      <Listado />
      <Favoritos />
    </ListaProvider>
  );
}
