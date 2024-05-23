import { useAppState } from "~/appcontext";

export default function Footer() {
  const ctx = useAppState();
  const { t } = ctx;

  return (
    <>
      <footer class="text-sm border-t border-t-stone-400 text-center mx-auto max-w-xs sm:max-w-md text-stone-400 pt-4 pb-2 mt-12">
        <p class="transition-all duration-200 inline-block text-stone-500 mx-auto mb-1 border-b border-dotted border-stone-500 hover:border-solid hover:border-b-cyan-950 hover:text-cyan-950">
          <a href={"/pubkeys/mtaciano.ssh.pub"} download>
            <abbr
              class="no-underline"
              title="SHA256:CcdAWEMdTf7LzNt9kWB7SGQHFs0K1kF8ldA3NdbaSJk"
            >
              CcdAWE...dbaSJk
            </abbr>{" "}
            (SSH)
          </a>
        </p>
        <br />
        <p class="transition-all duration-200 inline-block text-stone-500 mx-auto mb-1 border-b border-dotted border-stone-500 hover:border-solid hover:border-b-cyan-950 hover:text-cyan-950">
          <a href={"/pubkeys/mtaciano.gpg.asc"} download>
            <abbr
              class="no-underline"
              title="8313A90354AA2D6139FAE531F059B8F3B9AE19D4"
            >
              8313A9...AE19D4
            </abbr>{" "}
            (GPG)
          </a>
        </p>
        <div class="mt-2 flex flex-row justify-center">
          <a
            class="mx-2"
            href="https://www.linkedin.com/in/mtaciano"
            target="_blank"
          >
            <img
              title="LinkedIn"
              width="28em"
              height="auto"
              src="/svg/linkedin.svg"
            />
          </a>
          <a
            class="mx-2"
            href="https://www.github.com/mtaciano"
            target="_blank"
          >
            <img
              title="GitHub"
              width="28em"
              height="auto"
              src="/svg/github.svg"
            />
          </a>
          <a class="mx-2" href="mailto:contact@mtaciano.com" target="_blank">
            <img
              title="contact@mtaciano.com"
              width="28em"
              height="auto"
              src="/svg/email.svg"
            />
          </a>
        </div>
        <p class="pt-2">
          {t("global.footer.icons")}
          <a
            class="transition-all duration-200 inline-block text-stone-500 mx-auto border-b border-dotted border-stone-500 hover:border-solid hover:border-b-cyan-950 hover:text-cyan-950"
            href="https://simpleicons.org"
            target="_blank"
          >
            Simple Icons
          </a>
        </p>
        <p class="pt-2">
          {t("global.footer.made.start")}
          <a
            class="transition-all duration-200 inline-block text-stone-500 mx-auto border-b border-dotted border-stone-500 hover:border-solid hover:border-b-cyan-950 hover:text-cyan-950"
            href="https://docs.solidjs.com/solid-start"
            target="_blank"
          >
            SolidStart
          </a>{" "}
          {t("global.footer.made.middle")}
          <a
            class="transition-all duration-200 inline-block text-stone-500 mx-auto border-b border-dotted border-stone-500 hover:border-solid hover:border-b-cyan-950 hover:text-cyan-950"
            href="https://tailwindcss.com/"
            target="_blank"
          >
            Tailwind CSS
          </a>
        </p>
      </footer>
    </>
  );
}
