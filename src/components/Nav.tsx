import { useLocation } from "@solidjs/router";
import { createMemo, Show, onCleanup, createSignal } from "solid-js";
import Language from "~/components/Language";
import LanguageButton from "~/components/LanguageButton";

const TABS: { [key: string]: Array<string> } = {
  en: ["About", "Projects", "Blog", "Research", "Résumé"],
  ptbr: ["Sobre", "Projetos", "Blog", "Publicações", "Currículo"],
};

// TODO: this function is used inside the `LanguageButton`, but is marked as
// unused by the LSP, at the moment I don't know how to disable this warning
// without an ugly workaround (like false calling)
// TODO: deduplify this function
function clickOutside(elem: Element, accessor: () => any) {
  const onClick = (e: any) => !elem.contains(e.target) && accessor()?.();
  document.body.addEventListener("click", onClick);

  onCleanup(() => document.body.removeEventListener("click", onClick));
}
declare module "solid-js" {
  namespace JSX {
    interface Directives {
      clickOutside: () => boolean;
    }
  }
}

export default function Nav() {
  const { lang } = Language;
  const location = useLocation();
  const basePath = createMemo(() => {
    if (location.pathname === "/") {
      return location.pathname;
    }

    // Return only the base path of a URL
    // For example: `/blog/foo/bar` returns `/blog`
    return `/${location.pathname.split("/", 2)[1]}`;
  });
  const active = (path: string) => {
    return path === basePath()
      ? "border-zinc-400"
      : "border-transparent hover:border-zinc-400";
  };
  const [clicked, setClicked] = createSignal(false);
  const toggleClicked = () => setClicked(!clicked());

  return (
    <nav class="bg-zinc-100">
      <div class="hidden sm:block">
        <ul class="container flex items-center sm:max-w-none p-2 text-zinc-700">
          <li class={`border-b-2 ${active("/")} px-1 mx-1.5 md:mx-3`}>
            <a href="/">{TABS[lang()][0]}</a>
          </li>
          <li class={`border-b-2 ${active("/projects")} px-1 mx-1.5 md:mx-3`}>
            <a href="/projects">{TABS[lang()][1]}</a>
          </li>
          <li class={`border-b-2 ${active("/blog")} px-1 mx-1.5 md:mx-3`}>
            <a href="/blog">{TABS[lang()][2]}</a>
          </li>
          <li class={`border-b-2 ${active("/research")} px-1 mx-1.5 md:mx-3`}>
            <a href="/research">{TABS[lang()][3]}</a>
          </li>
          <li class={`border-b-2 ${active("/resume")} px-1 mx-1.5 md:mx-3`}>
            <a href="/resume">{TABS[lang()][4]}</a>
          </li>
          <div class="px-2 ml-auto">
            <LanguageButton />
          </div>
        </ul>
      </div>
      <div class="block sm:hidden h-[3.25em]">
        <div use:clickOutside={() => setClicked(false)}>
          <div
            onClick={toggleClicked}
            class="absolute cursor-pointer mx-[14px] my-2.5 px-[5px] py-[7px] hover:ring-1 hover:ring-zinc-700 hover:ring-opacity-25 hover:bg-zinc-200 active:bg-zinc-300"
          >
            <div class="bg-zinc-700 w-6 h-1" />
            <div class="bg-zinc-700 mt-1 w-6 h-1" />
            <div class="bg-zinc-700 mt-1 w-6 h-1" />
          </div>
        </div>
        <ul class="container flex items-center p-2 text-zinc-700">
          <Show when={clicked()}>
            <ul class="text-2xl absolute grid left-[3vw] z-10 mt-[21rem] p-2 w-[94vw] origin-top-left bg-zinc-50 shadow-sm ring-1 ring-zinc-700 ring-opacity-25">
              <li
                class={`border-b-2 border-l-2 ${active("/")} px-3 mx-1.5 py-2`}
              >
                <a class="inline-grid w-full" href="/">
                  {TABS[lang()][0]}
                </a>
              </li>
              <li
                class={`border-b-2 border-l-2 ${active("/projects")} px-3 mx-1.5 py-2`}
              >
                <a class="inline-grid w-full" href="/projects">
                  {TABS[lang()][1]}
                </a>
              </li>
              <li
                class={`border-b-2 border-l-2 ${active("/blog")} px-3 mx-1.5 py-2`}
              >
                <a class="inline-grid w-full" href="/blog">
                  {TABS[lang()][2]}
                </a>
              </li>
              <li
                class={`border-b-2 border-l-2 ${active("/research")} px-3 mx-1.5 py-2`}
              >
                <a class="inline-grid w-full" href="/research">
                  {TABS[lang()][3]}
                </a>
              </li>
              <li
                class={`border-b-2 border-l-2 ${active("/resume")} px-3 mx-1.5 py-2 my-2`}
              >
                <a class="inline-grid w-full" href="/resume">
                  {TABS[lang()][4]}
                </a>
              </li>
            </ul>
          </Show>
          <div class="px-2 ml-auto">
            <LanguageButton />
          </div>
        </ul>
      </div>
    </nav>
  );
}
