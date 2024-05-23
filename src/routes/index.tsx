import Anchor from "~/components/Anchor";
import { useAppState } from "~/appcontext";
import { Title, Meta } from "@solidjs/meta";

export default function Home() {
  const ctx = useAppState();
  const { t } = ctx;

  return (
    <>
      <Title>Miguel Taciano</Title>
      <Meta name="description" content="Miguel Taciano's Portfolio" />
      <Meta
        name="keywords"
        content="SolidJS, SolidStart, TailwindCSS, Portfolio, Computer Engineer, Unifesp"
      />

      <main class="text-center text-stone-800">
        <div class="flex justify-center w-full">
          <h1 class="text-cyan-950 underline underline-offset-[6px] sm:underline-offset-8 decoration-[6px] sm:decoration-8 decoration-cyan-600 -skew-y-2 font-serif text-5xl sm:text-8xl mt-6 sm:mt-10 mb-2">
            Miguel Taciano
          </h1>
        </div>
        <h2 class="text-cyan-950 font-mono font-medium tracking-tight text-xl sm:text-4xl mb-4 sm:mb-10">
          {t("about.job")}
        </h2>
        <article class="text-lg sm:text-base text-justify mx-6 sm:max-w-xl sm:mx-auto leading-relaxed sm:leading-loose">
          <img
            class="transition-all duration-200 sm:hover:-rotate-2 sm:float-left h-32 w-32 sm:h-40 sm:w-40 rounded-3xl overflow-hidden mx-auto mb-4 sm:mb-0 sm:mr-3"
            src="/images/profile.avif"
            alt="Profile picture"
          />
          <p>
            {t("about.p1.part1")}
            <Anchor href="https://www.unifesp.br" target="_blank">
              {t("about.p1.unifesp")}
            </Anchor>
            {t("about.p1.part2")}
          </p>
          <p class="mt-4">
            {t("about.p2.part1")}
            <Anchor href="https://www.unifesp.br" target="_blank">
              {t("about.p2.jigsaw")}
            </Anchor>
            {t("about.p2.part2")}
          </p>
          <p class="mt-4">
            {t("about.p3.part1")}
            <Anchor href="https://www.unifesp.br" target="_blank">
              {t("about.p3.risc")}
            </Anchor>
            {t("about.p3.part2")}
            <Anchor href="https://www.unifesp.br" target="_blank">
              {t("about.p3.cminus")}
            </Anchor>
            {t("about.p3.part3")}
            <Anchor href="https://www.unifesp.br" target="_blank">
              {t("about.p3.sol")}
            </Anchor>
            {t("about.p3.part4")}
          </p>
        </article>
      </main>
    </>
  );
}
