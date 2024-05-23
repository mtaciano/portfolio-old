import { useLocation } from "@solidjs/router";
import { For, createMemo } from "solid-js";
import { useAppState } from "~/appcontext";
import LanguageButton from "~/components/LanguageButton";

export default function DesktopNav() {
  const ctx = useAppState();
  const { t } = ctx;
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
          <For each={t("global.nav")}>
            {(nav, _) => (
              <li
                class={`transition-all duration-200 border-b-2 ${active(nav.path)} px-1 mx-1.5 md:mx-3`}
              >
                <a href={nav.path}>{nav.title}</a>
              </li>
            )}
          </For>
          <div class="font-normal px-2 ml-auto">
            <LanguageButton />
          </div>
        </ul>
      </div>
    </>
  );
}
