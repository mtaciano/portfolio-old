import { useLocation } from "@solidjs/router";
import { createMemo } from "solid-js";
import Language from "~/components/Language";
import LanguageButton from "~/components/LanguageButton";

const TABS: { [key: string]: Array<string> } = {
  en: ["About", "Projects", "Blog", "Research", "Résumé"],
  ptbr: ["Sobre", "Projetos", "Blog", "Publicações", "Currículo"],
};

export default function DesktopNav() {
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
      ? "border-stone-50"
      : "border-transparent hover:border-stone-50";
  };

  return (
    <>
      <div class="hidden sm:block bg-cyan-600">
        <ul class="font-medium container flex items-center sm:max-w-none p-2 text-stone-50">
          <li
            class={`transition-all duration-200 border-b-2 ${active("/")} px-1 mx-1.5 md:mx-3`}
          >
            <a href="/">{TABS[lang()][0]}</a>
          </li>
          <li
            class={`transition-all duration-200 border-b-2 ${active("/projects")} px-1 mx-1.5 md:mx-3`}
          >
            <a href="/projects">{TABS[lang()][1]}</a>
          </li>
          <li
            class={`transition-all duration-200 border-b-2 ${active("/blog")} px-1 mx-1.5 md:mx-3`}
          >
            <a href="/blog">{TABS[lang()][2]}</a>
          </li>
          <li
            class={`transition-all duration-200 border-b-2 ${active("/research")} px-1 mx-1.5 md:mx-3`}
          >
            <a href="/research">{TABS[lang()][3]}</a>
          </li>
          <li
            class={`transition-all duration-200 border-b-2 ${active("/resume")} px-1 mx-1.5 md:mx-3`}
          >
            <a href="/resume">{TABS[lang()][4]}</a>
          </li>
          <div class="font-normal px-2 ml-auto">
            <LanguageButton />
          </div>
        </ul>
      </div>
    </>
  );
}
