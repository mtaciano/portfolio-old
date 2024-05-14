import { createSignal, Show, For, onCleanup } from "solid-js";
import Language from "~/components/Language";

const LANG_ICON = (
  <svg class="fill-stone-50" role="img" viewBox="0 0 23 23" width={"1.625em"}>
    <path d="m12.87 15.07-2.54-2.51.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2zm-2.62 7 1.62-4.33L19.12 17z"></path>
  </svg>
);

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

export default function LanguageButton() {
  const [clicked, setClicked] = createSignal(false);
  const toggleClicked = () => setClicked(!clicked());
  const [availLangs, _] = createSignal([
    {
      code: "en",
      name: "English",
      image: "/svg/us.svg",
    },
    {
      code: "ptbr",
      name: "Português",
      image: "/svg/br.svg",
    },
  ]);
  const { setLang } = Language;

  return (
    <>
      <div
        use:clickOutside={() => setClicked(false)}
        class="transition-all duration-200 flex justify-center rounded-sm hover:bg-cyan-700 focus-within:ring-1 focus-within:ring-cyan-700 focus-within:ring-opacity-25 focus-within:bg-cyan-700 active:bg-cyan-800 p-1"
      >
        <button onclick={toggleClicked} type="button">
          {LANG_ICON}
        </button>
      </div>
      <Show when={clicked()}>
        <div class="absolute right-4 z-10 mt-[10px] sm:mt-2 w-48 origin-top-right bg-stone-50 shadow-sm ring-1 ring-stone-700 ring-opacity-25 rounded-sm">
          <For each={availLangs()}>
            {(l, _) => (
              <a
                class="block cursor-pointer px-4 py-2 text-lg sm:text-sm text-stone-700 hover:bg-stone-100 hover:ring-1 hover:ring-cyan-800 hover:ring-opacity-15 active:bg-stone-200"
                role="menuitem"
                onClick={() => {
                  setLang(l.code);
                }}
              >
                <div class="flex items-center">
                  <img class="h-4 pr-2" src={l.image} />
                  {l.name}
                </div>
              </a>
            )}
          </For>
        </div>
      </Show>
    </>
  );
}
