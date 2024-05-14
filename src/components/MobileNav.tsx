import { useLocation } from "@solidjs/router";
import { Show, createMemo, createSignal, onCleanup } from "solid-js";
import Language from "~/components/Language";
import LanguageButton from "~/components/LanguageButton";

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

const TABS: { [key: string]: Array<string> } = {
  en: ["About", "Projects", "Blog", "Research", "Résumé"],
  ptbr: ["Sobre", "Projetos", "Blog", "Publicações", "Currículo"],
};

export default function MobileNav() {
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
  const [clicked, setClicked] = createSignal(false);
  const toggleClicked = () => setClicked(!clicked());
  const active = (path: string) => {
    return path === basePath() ? "border-b-2 border-cyan-700" : "border-none";
  };

  return (
    <>
      <nav class="block sm:hidden bg-cyan-500">
        <div class="h-[3.25em]">
          <div use:clickOutside={() => setClicked(false)}>
            <div
              onClick={toggleClicked}
              class="transition-all duration-200 absolute rounded-sm cursor-pointer mx-[14px] my-2.5 px-[5px] py-[7px] hover:ring-1 hover:ring-cyan-800 hover:ring-opacity-25 hover:bg-cyan-600 active:bg-cyan-700"
            >
              <div class="bg-stone-50 w-6 h-1" />
              <div class="bg-stone-50 mt-1 w-6 h-1" />
              <div class="bg-stone-50 mt-1 w-6 h-1" />
            </div>
          </div>
          <ul class="container flex items-center p-2 text-stone-700">
            <Show when={clicked()}>
              <ul class="text-xl rounded-sm font-semibold absolute grid left-[3vw] z-10 mt-[18.25rem] p-2 w-[94vw] origin-top-left bg-stone-50 shadow-sm ring-1 ring-stone-700 ring-opacity-25">
                <li class={`${active("/")} px-3 mx-1.5 my-2`}>
                  <a class="inline-grid w-full" href="/">
                    {TABS[lang()][0]}
                  </a>
                </li>
                <li class={`${active("/projects")} px-3 mx-1.5 my-2`}>
                  <a class="inline-grid w-full" href="/projects">
                    {TABS[lang()][1]}
                  </a>
                </li>
                <li class={`${active("/blog")} px-3 mx-1.5 my-2`}>
                  <a class="inline-grid w-full" href="/blog">
                    {TABS[lang()][2]}
                  </a>
                </li>
                <li class={`${active("/research")} px-3 mx-1.5 my-2`}>
                  <a class="inline-grid w-full" href="/research">
                    {TABS[lang()][3]}
                  </a>
                </li>
                <li class={`${active("/resume")} px-3 mx-1.5 my-2`}>
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
    </>
  );
}