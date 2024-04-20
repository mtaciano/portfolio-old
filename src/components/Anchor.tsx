export default function Anchor(props: any) {
  return (
    <a
      class="text-stone-500 border-b border-dotted border-stone-500 hover:border-solid hover:border-b-amber-700 hover:text-amber-700"
      href={props.href}
      target={props.target}
    >
      {props.children}
    </a>
  );
}
