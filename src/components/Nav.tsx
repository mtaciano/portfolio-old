import { useLocation } from "@solidjs/router";
import { createMemo } from "solid-js";
import Language from "~/components/Language";
import LanguageButton from "~/components/LanguageButton";

const TABS: { [key: string]: Array<string> } = {
  en: ["About", "Projects", "Blog", "Papers", "Résumé"],
  ptbr: ["Sobre", "Projetos", "Blog", "Publicações", "Currículo"],
};

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
  // Verify which tab is the currently active
  const active = (path: string) => {
    return path === basePath()
      ? "border-zinc-400"
      : "border-transparent hover:border-zinc-400";
  };

  return (
    <nav class="bg-zinc-100 max-w-none">
      <ul class="container flex items-center max-w-none p-2 text-zinc-700">
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
          <a href="/papers">{TABS[lang()][3]}</a>
        </li>
        <li class={`border-b-2 ${active("/resume")} px-1 mx-1.5 md:mx-3`}>
          <a href="/resume">{TABS[lang()][4]}</a>
        </li>
        <div class="px-2 ml-auto">
          <LanguageButton />
        </div>
      </ul>
    </nav>
  );
}
