import Language from "~/components/Language";

const NOT_FOUND: { [key: string]: string } = {
  en: "Page not found",
  ptbr: "Página não encontrada",
};

export default function NotFound() {
  const { lang } = Language;

  return (
    <main class="text-center text-zinc-700">
      <h1 class="font-mono text-8xl font-bold mt-28">404</h1>
      <h2 class="text-2xl mb-32">{NOT_FOUND[lang()]}</h2>
    </main>
  );
}
