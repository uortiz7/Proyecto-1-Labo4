export default function Buscador() {
  return (
    <header
      className="
      py-2 px-10
      flex items-center gap-8
      sticky top-0
      bg-red-950
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="35"
        height="35"
        viewBox="0 0 24 24"
      >
        <path d="M 4 4 A 1.0001 1.0001 0 1 0 4 6 L 20 6 A 1.0001 1.0001 0 1 0 20 4 L 4 4 z M 4 11 A 1.0001 1.0001 0 1 0 4 13 L 20 13 A 1.0001 1.0001 0 1 0 20 11 L 4 11 z M 4 18 A 1.0001 1.0001 0 1 0 4 20 L 20 20 A 1.0001 1.0001 0 1 0 20 18 L 4 18 z"></path>
      </svg>
      <form action="" className="w-3xs">
        <input
          type="text"
          name="buscar"
          id="buscar"
          placeholder="Buscar canciones"
        />
      </form>
    </header>
  );
}
