import { HttpStatusCode } from "@solidjs/start";
import { useAppState } from "~/appcontext";

export default function NotFound() {
  const ctx = useAppState();
  const { t } = ctx;

  <HttpStatusCode code={404} />;

  return (
    <main class="text-center text-zinc-700">
      <h1 class="font-mono text-8xl font-bold mt-28">
        {t("global.404.header")}
      </h1>
      <h2 class="text-2xl mb-32">{t("global.404.body")}</h2>
    </main>
  );
}
