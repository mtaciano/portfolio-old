import { createSignal, createRoot } from "solid-js";

function Language() {
  const [lang, setLang] = createSignal("en");

  return { lang, setLang };
}

export default createRoot(Language);
