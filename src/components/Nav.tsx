import { useLocation } from "@solidjs/router";
import { createMemo } from "solid-js";

export default function Nav() {
  const location = useLocation();
  const basePath = createMemo(() => {
    if (location.pathname === "/") {
      return location.pathname;
    }

    return `/${location.pathname.split("/", 2)[1]}`;
  });
  const active = (path: string) => {
    return path === basePath()
      ? "border-stone-400"
      : "border-transparent hover:border-stone-400";
  };

  return (
    <nav class="bg-stone-100">
      <ul class="container flex items-center p-3 text-stone-700">
        <li class={`border-b-2 ${active("/")} px-1 mx-1.5 md:mx-4`}>
          <a href="/">About</a>
        </li>
        <li class={`border-b-2 ${active("/projects")} px-1 mx-1.5 sm:mx-4`}>
          <a href="/projects">Projects</a>
        </li>
        <li class={`border-b-2 ${active("/blog")} px-1 mx-1.5 sm:mx-4`}>
          <a href="/blog">Blog</a>
        </li>
        <li class={`border-b-2 ${active("/research")} px-1 mx-1.5 sm:mx-4`}>
          <a href="/papers">Papers</a>
        </li>
        <li class={`border-b-2 ${active("/resume")} px-1 mx-1.5 sm:mx-4`}>
          <a href="/resume">Resumé</a>
        </li>
      </ul>
    </nav>
  );
}
