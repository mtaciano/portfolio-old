import { useAppState } from "~/appcontext";
import PrefixTitle from "~/components/PrefixTitle";

export default function Blog() {
  const ctx = useAppState();
  const { t } = ctx;

  return (
    <>
      <PrefixTitle>{t("blog.title")}</PrefixTitle>
      <main class="text-center text-stone-700">
        <h1 class="font-bold text-4xl sm:text-6xl mt-40">
          Blog Page <br /> Under Construction.
        </h1>
      </main>
    </>
  );
}
