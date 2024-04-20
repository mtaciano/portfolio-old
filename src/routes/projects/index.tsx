import Language from "~/components/Language";
import PrefixTitle from "~/components/PrefixTitle";

const TITLE: { [key: string]: string } = {
  en: "Projects",
  ptbr: "Projetos",
};

export default function Projects() {
  const { lang } = Language;
  const title = () => TITLE[lang()];

  return (
    <>
      <PrefixTitle>{title()}</PrefixTitle>
      <main class="text-center text-stone-700">
        <h1 class="font-bold text-4xl sm:text-6xl mt-40">
          Projects Page <br /> Under Construction.
        </h1>
      </main>
    </>
  );
}
