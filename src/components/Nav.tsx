import DesktopNav from "~/components/DesktopNav";
import MobileNav from "~/components/MobileNav";

import { createSignal, onMount, onCleanup, Match, Switch } from "solid-js";

export default function Nav() {
  const [win, setWin] = createSignal({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const resizeHandler = (_: Event) => {
    setWin({ height: window.innerHeight, width: window.innerWidth });
  };

  onMount(() => {
    window.addEventListener("resize", resizeHandler);
  });

  onCleanup(() => {
    window.removeEventListener("resize", resizeHandler);
  });

  return (
    <Switch fallback={<DesktopNav />}>
      <Match when={win().width >= 640}>
        <DesktopNav />
      </Match>
      <Match when={win().width < 640}>
        <MobileNav />
      </Match>
    </Switch>
  );
}
