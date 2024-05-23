import { useAppState } from "~/appcontext";
import PrefixTitle from "~/components/PrefixTitle";

export default function Research() {
  const ctx = useAppState();
  const { t } = ctx;

  return (
    <>
      <PrefixTitle>{t("research.title")}</PrefixTitle>
      <main class="text-center text-stone-700">
        <h1 class="font-bold text-4xl sm:text-6xl mt-40">
          Research Page <br /> Under Construction.
        </h1>
      </main>
    </>
  );
}
