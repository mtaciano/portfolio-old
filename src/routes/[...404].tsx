import Language from "~/components/Language";

const NOT_FOUND: { [key: string]: string } = {
  en: "Page not found",
  ptbr: "Página não encontrada",
};

export default function NotFound() {
  const { lang } = Language;

  return (
    <main class="text-center mx-auto text-zinc-700 p-4">
      <h1 class="font-mono text-8xl font-bold mt-28">404</h1>
      <h2 class="text-2xl">{NOT_FOUND[lang()]}</h2>
    </main>
  );
}
