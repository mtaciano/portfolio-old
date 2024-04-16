const NOT_FOUND = {
  en: "Page not found",
  ptbr: "Página não encontrada",
};

export default function NotFound() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="font-mono text-8xl font-bold mt-28">404</h1>
      <h2 class="text-2xl">{NOT_FOUND["en"]}</h2>
    </main>
  );
}
