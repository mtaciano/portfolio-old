import { JSX } from "solid-js";

export default function Anchor(props: {
  href: string;
  target: string;
  children: JSX.Element;
}) {
  return (
    <a
      class="after:content-['↗'] after:pl-0.5 after:font-mono after:text-sm after:font-bold transition-all duration-200 font-medium sm:px-1 text-cyan-700 border-b border-b-cyan-700 hover:text-cyan-800 hover:border-b-cyan-800 sm:hover:text-stone-50 sm:border-none sm:inline-block sm:leading-normal sm:text-stone-50 sm:bg-cyan-700 sm:rounded-sm sm:hover:-skew-y-2 sm:hover:-skew-x-6 sm:hover:scale-105 sm:hover:rounded-lg"
      href={props.href}
      target={props.target}
    >
      {props.children}
    </a>
  );
}
