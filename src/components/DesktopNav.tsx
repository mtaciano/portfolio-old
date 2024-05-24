import { useAppState } from "~/appcontext";
import LanguageButton from "~/components/LanguageButton";
import { For, createMemo } from "solid-js";
import { useLocation } from "@solidjs/router";

export default function DesktopNav() {
  const ctx = useAppState();
  const { t } = ctx;
  const location = useLocation();
  const basePath = createMemo(() => {
    if (location.pathname === "/") {
      return location.pathname;
    }

    // Return only the base path of a URL
    // e.g.: `/blog/foo/bar` returns `/blog`
    return `/${location.pathname.split("/", 2)[1]}`;
  });
  const active = (path: string) => {
    return path === basePath()
      ? "border-stone-50"
      : "border-transparent hover:border-stone-50";
  };

  return (
    <>
      <div class="hidden sm:block bg-gradient-to-b from-cyan-700 to-cyan-600">
        <ul class="font-medium container flex items-center sm:max-w-none p-2 text-stone-50">
          <For each={t("global.nav")}>
            {(nav, _) => (
              <li
                class={`transition-all duration-200 border-b-2 ${active(nav.path)} px-1 mx-1.5 md:mx-3`}
              >
                <a href={nav.path}>{nav.title}</a>
              </li>
            )}
          </For>
          <div class="flex font-normal px-2 ml-auto">
            <div class="mr-2 ring-1 ring-cyan-800 rounded-sm bg-cyan-700 bg-opacity-80 flex flex-row justify-center items-center">
              <a
                class="mx-2"
                href="https://www.linkedin.com/in/mtaciano"
                target="_blank"
              >
                <img
                  title="LinkedIn"
                  width="26em"
                  class="filter invert"
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
                  width="26em"
                  class="filter invert"
                  height="auto"
                  src="/svg/github.svg"
                />
              </a>
              <a
                class="mx-2"
                href="mailto:contact@mtaciano.com"
                target="_blank"
              >
                <img
                  title="contact@mtaciano.com"
                  width="26em"
                  class="filter invert"
                  height="auto"
                  src="/svg/email.svg"
                />
              </a>
            </div>
            <div class="block">
              <LanguageButton />
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}
