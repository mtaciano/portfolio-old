import PrefixTitle from "~/components/PrefixTitle";
import Language from "~/components/Language";

const TITLE: { [key: string]: string } = {
  en: "Research",
  ptbr: "Publicações",
};

export default function Research() {
  const { lang } = Language;
  const title = () => TITLE[lang()];

  return (
    <>
      <PrefixTitle>{title()}</PrefixTitle>
      <main class="text-center text-stone-700">
        <h1 class="font-bold text-4xl sm:text-6xl mt-40">
          Research Page <br /> Under Construction.
        </h1>
      </main>
    </>
  );
}
